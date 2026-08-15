# Mūlpath Architecture & Technical Specifications

Mūlpath (formerly VanaChain) is an end-to-end, blockchain-anchored botanical traceability platform designed for Ayurvedic herbs. It provides cryptographic provenance, AI species verification, geo-fenced origin validation, and verifiable fair-trade profit sharing.

---

## Key Differentiators

1. **Geo-Fencing Origin Validation**
   - Harvest locations (GPS latitude/longitude) are checked against certified organic polygons using `@turf/turf`.
   - Verified coordinates are hashed and anchored on Polygon Amoy testnet.

2. **AI Species Verification**
   - Herb images uploaded during collection are evaluated using HuggingFace Vision AI (`google/vit-base-patch16-224`).
   - Confidence scores and warning flags alert quality labs to potential adulteration or misidentification.

3. **Verifiable Fair-Trade Share on Blockchain**
   - Financial transactions across the supply chain are tracked and matched against retail prices.
   - Calculates exact percentage of retail consumer price that reaches the original farmer, stored immutably on-chain.

---

## System Architecture Overview

```
 ┌─────────────────────────────────────────────────────────────┐
 │                      React Frontend                         │
 │     (Collector | Aggregator | Lab | Manufacturer | Verify)  │
 └──────────────────────────────┬──────────────────────────────┘
                                │ REST API
 ┌──────────────────────────────▼──────────────────────────────┐
 │                      Express Backend                        │
 │  ┌───────────────────────┐       ┌───────────────────────┐  │
 │  │   Prisma ORM (Pg)     │       │ HuggingFace Vision AI │  │
 │  └───────────────────────┘       └───────────────────────┘  │
 └──────────────────────────────┬──────────────────────────────┘
                                │ Ethers.js v6
 ┌──────────────────────────────▼──────────────────────────────┐
 │                   Polygon Amoy Contracts                    │
 │  (HarvestRegistry | GeoFenceValidator | FormulationRegistry)│
 └─────────────────────────────────────────────────────────────┘
```

---

## Supply Chain Lifecycle

1. **Harvest Logging (Collector)**
   - Farmer logs herb species, weight (kg), GPS location, notes, and photo.
   - Server runs Turf.js geo-fencing check & HuggingFace AI classification.
   - `HarvestRegistry.sol` records `batchId`, `species`, `gpsHash`, and `zoneValidated`.

2. **Aggregation & Processing (Aggregator)**
   - Aggregator receives validated batches and logs processing steps (e.g. `SUN_DRYING`, `GRINDING`).
   - Batch status updates to `AGGREGATED`.

3. **Quality Assurance (Lab)**
   - Authorized lab inspects incoming batches and conducts HPLC/purity tests.
   - Uploads `TestCertificate` (PASSED / FAILED) with purity score. Status updates to `TESTED`.

4. **Formulation & QR Generation (Manufacturer)**
   - Manufacturer combines tested herb batches into a commercial product formulation.
   - Computes `fairTradePercentage = (totalFarmerPayout / retailPrice) * 100`.
   - `FormulationRegistry.sol` registers formulation on-chain and generates customer QR code.

5. **Consumer Transparency (Verify View)**
   - Consumer scans QR code to view end-to-end provenance timeline, interactive leaf map, lab certificates, eco score, and verified fair-trade percentage.

---

## Smart Contracts Specification

| Contract | Functionality |
|---|---|
| `HarvestRegistry.sol` | Records batch harvest events, species, GPS hash, and geo-fence validation status. |
| `GeoFenceValidator.sol` | Admin registry of approved geo-spatial polygon hashes for herb species. |
| `FormulationRegistry.sol` | Links multiple source batch IDs into a final consumer product formulation. |
| `HerbTraceability.sol` | Legacy batch ownership transfers and lab authorization registry. |

---

## Local Development & Setup

See [`README.md`](../README.md) for quickstart commands and configuration instructions.
