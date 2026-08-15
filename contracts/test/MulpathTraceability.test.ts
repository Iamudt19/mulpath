import { expect } from "chai";
import { ethers } from "hardhat";

describe("Mūlpath Smart Contracts", function () {
  let deployer: any;
  let collector: any;
  let lab: any;
  let manufacturer: any;

  let harvestRegistry: any;
  let geoFenceValidator: any;
  let formulationRegistry: any;
  let herbTraceability: any;

  beforeEach(async function () {
    [deployer, collector, lab, manufacturer] = await ethers.getSigners();

    const HarvestRegistry = await ethers.getContractFactory("HarvestRegistry");
    harvestRegistry = await HarvestRegistry.deploy();

    const GeoFenceValidator = await ethers.getContractFactory("GeoFenceValidator");
    geoFenceValidator = await GeoFenceValidator.deploy();

    const FormulationRegistry = await ethers.getContractFactory("FormulationRegistry");
    formulationRegistry = await FormulationRegistry.deploy();

    const HerbTraceability = await ethers.getContractFactory("HerbTraceability");
    herbTraceability = await HerbTraceability.deploy();
  });

  describe("GeoFenceValidator", function () {
    it("should allow admin to set and get approved zones", async function () {
      const species = "Ashwagandha";
      const zoneHash = "QmAbc123GeoJsonHash";

      await expect(geoFenceValidator.setApprovedZone(species, zoneHash))
        .to.emit(geoFenceValidator, "ZoneUpdated")
        .withArgs(species, zoneHash, deployer.address);

      const savedZone = await geoFenceValidator.getApprovedZone(species);
      expect(savedZone).to.equal(zoneHash);
    });

    it("should reject non-admin settings", async function () {
      await expect(
        geoFenceValidator.connect(collector).setApprovedZone("Ashwagandha", "hash")
      ).to.be.revertedWith("Not admin");
    });
  });

  describe("HarvestRegistry", function () {
    it("should register a new harvest batch", async function () {
      const batchId = "BATCH-1001";
      const species = "Ashwagandha";
      const gpsHash = ethers.keccak256(ethers.toUtf8Bytes("24.465,74.869"));
      const zoneValidated = true;

      await expect(
        harvestRegistry.connect(collector).registerHarvest(batchId, species, gpsHash, zoneValidated)
      )
        .to.emit(harvestRegistry, "HarvestRegistered")
        .withArgs(batchId, species, gpsHash, zoneValidated, await ethers.provider.getBlock('latest').then(b => b?.timestamp ? b.timestamp + 1 : 0), collector.address);

      const harvest = await harvestRegistry.harvests(batchId);
      expect(harvest.batchId).to.equal(batchId);
      expect(harvest.species).to.equal(species);
      expect(harvest.zoneValidated).to.be.true;
      expect(harvest.registrar).to.equal(collector.address);
    });

    it("should not allow duplicate batch IDs", async function () {
      const batchId = "BATCH-1001";
      const gpsHash = ethers.keccak256(ethers.toUtf8Bytes("24.465,74.869"));

      await harvestRegistry.connect(collector).registerHarvest(batchId, "Ashwagandha", gpsHash, true);
      await expect(
        harvestRegistry.connect(collector).registerHarvest(batchId, "Ashwagandha", gpsHash, true)
      ).to.be.revertedWith("Harvest already registered");
    });
  });

  describe("FormulationRegistry", function () {
    it("should register a formulation with source batches", async function () {
      const formulationId = 1;
      const name = "Immunity Booster Tablets";
      const sourceBatches = ["BATCH-1001", "BATCH-1002"];
      const qrCodeUrl = "/uploads/qr/formulation-1.png";

      await formulationRegistry.connect(manufacturer).registerFormulation(
        formulationId,
        name,
        sourceBatches,
        qrCodeUrl
      );

      const savedBatches = await formulationRegistry.getFormulationBatches(formulationId);
      expect(savedBatches).to.deep.equal(sourceBatches);
    });

    it("should reject registering duplicate formulation IDs", async function () {
      const formulationId = 1;
      await formulationRegistry.registerFormulation(formulationId, "Test", [], "/qr.png");
      await expect(
        formulationRegistry.registerFormulation(formulationId, "Test 2", [], "/qr2.png")
      ).to.be.revertedWith("Formulation already registered");
    });
  });

  describe("HerbTraceability", function () {
    it("should authorize and revoke lab access", async function () {
      await expect(herbTraceability.authorizeLab(lab.address))
        .to.emit(herbTraceability, "LabAuthorized")
        .withArgs(lab.address);

      expect(await herbTraceability.authorizedLabs(lab.address)).to.be.true;

      await expect(herbTraceability.revokeLab(lab.address))
        .to.emit(herbTraceability, "LabRevoked")
        .withArgs(lab.address);

      expect(await herbTraceability.authorizedLabs(lab.address)).to.be.false;
    });

    it("should register batch and transfer ownership", async function () {
      const batchId = "BATCH-500";
      await herbTraceability.connect(collector).registerBatch(batchId);

      let batch = await herbTraceability.batches(batchId);
      expect(batch.currentOwner).to.equal(collector.address);

      await herbTraceability.connect(collector).transferOwnership(batchId, lab.address);
      batch = await herbTraceability.batches(batchId);
      expect(batch.currentOwner).to.equal(lab.address);
    });
  });
});
