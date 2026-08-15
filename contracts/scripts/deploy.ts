import { ethers } from "hardhat";
import * as fs from "fs";

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying contracts with account:", deployer.address);

  // Deploy HarvestRegistry
  const HarvestRegistry = await ethers.getContractFactory("HarvestRegistry");
  const harvestRegistry = await HarvestRegistry.deploy();
  await harvestRegistry.waitForDeployment();
  const harvestAddr = await harvestRegistry.getAddress();
  console.log("HarvestRegistry deployed to:", harvestAddr);

  // Deploy GeoFenceValidator
  const GeoFenceValidator = await ethers.getContractFactory("GeoFenceValidator");
  const geoFenceValidator = await GeoFenceValidator.deploy();
  await geoFenceValidator.waitForDeployment();
  const geoFenceAddr = await geoFenceValidator.getAddress();
  console.log("GeoFenceValidator deployed to:", geoFenceAddr);

  // Deploy FormulationRegistry
  const FormulationRegistry = await ethers.getContractFactory("FormulationRegistry");
  const formulationRegistry = await FormulationRegistry.deploy();
  await formulationRegistry.waitForDeployment();
  const formulationAddr = await formulationRegistry.getAddress();
  console.log("FormulationRegistry deployed to:", formulationAddr);

  // Deploy HerbTraceability (already existing)
  const HerbTraceability = await ethers.getContractFactory("HerbTraceability");
  const herbTraceability = await HerbTraceability.deploy();
  await herbTraceability.waitForDeployment();
  const herbAddr = await herbTraceability.getAddress();
  console.log("HerbTraceability deployed to:", herbAddr);

  // Write addresses to file for backend
  const addresses = {
    HarvestRegistry: harvestAddr,
    GeoFenceValidator: geoFenceAddr,
    FormulationRegistry: formulationAddr,
    HerbTraceability: herbAddr
  };

  fs.writeFileSync("../backend/src/contractAddresses.json", JSON.stringify(addresses, null, 2));
  console.log("Addresses saved to backend/src/contractAddresses.json");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
