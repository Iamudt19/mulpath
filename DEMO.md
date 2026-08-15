# Mūlpath — 5-Minute Demo Script

> **Goal:** Walk through the complete journey of one Ashwagandha batch — from a named farmer through testing and manufacturing to the consumer — in under 5 minutes. At each stage, explicitly highlight the **three differentiators**: Geo-fencing, AI species verification, and Fair-trade % tracking.

## Pre-requisites

1. Frontend + Backend running (`npm run dev` in both directories).
2. Database seeded (`cd backend && npx prisma db seed`).
   - This creates 4 demo actors, an approved Ashwagandha zone, and a complete end-to-end batch.

---

## Act 1 — The Problem & Platform (0:00 – 0:30)

**Screen:** `http://localhost:3000` → Landing Page

**What to show:**
- The hero banner — *"60% of Ayurvedic herbs are adulterated."*
- Scroll to the 3-step visual: Collect & Verify → Test & Process → Consumer Trust.

**Script:**
> "Today, consumers have no way to know if their Ashwagandha capsule is real, safe, or fair to the farmer who grew it. Mūlpath solves this by creating an end-to-end, tamper-proof supply chain using AI, geo-fencing, and the Polygon blockchain. Let me walk you through a real batch."

---

## Act 2 — The Farmer: Ram Singh (0:30 – 1:30)

**Screen:** Click **Collector** portal → `/collector`

**What to show:**
1. Click the **My History** tab.
2. Point out the seeded Ashwagandha batch (100 kg, Neemuch MP).
3. Highlight the two inline badges:
   - **✅ Zone Validated** — *"GPS coordinates are checked against approved organic farming zones in Madhya Pradesh. This is our* ***Geo-fencing*** *differentiator."*
   - **AI Species Check: 96% ✅** — *"A photo was uploaded and our HuggingFace Vision AI confirmed it is Ashwagandha with 96% confidence. This is our* ***AI verification*** *differentiator."*
4. Click **🔗 Verify On-Chain** — *"This harvest log is anchored to the Polygon Amoy testnet. No one can tamper with it after the fact."*

**Key differentiators called out:** ✅ Geo-fencing, ✅ AI Check

---

## Act 3 — The Aggregator: Shakti Enterprises (1:30 – 2:15)

**Screen:** Navigate to **Aggregator** → `/aggregator`

**What to show:**
1. **Incoming Batches** tab — Ram Singh's 100 kg Ashwagandha is visible.
2. Switch to **Add Processing** tab → Select the batch → Choose "Drying" → Add notes: "Sun dried 3 days under shade netting" → Submit.
3. (Optional) Show the **Pay** button on the batch card.

**Script:**
> "Shakti Enterprises receives the batch with full provenance already attached — GPS proof, AI species match, and a blockchain anchor. They add value-add processing events like drying and grinding. Each event is recorded immutably."

---

## Act 4 — The Lab: Ayush Quality Labs (2:15 – 3:00)

**Screen:** Navigate to **Quality Lab** → `/lab`

**What to show:**
1. Under **Batches Awaiting Testing**, point out the batch and its AI Confidence badge.
2. In the **Upload Test Report** panel, show the pre-seeded certificate: PASSED, 92% purity.

**Script:**
> "The lab sees the AI confidence score. If it were low, they'd know to apply extra scrutiny. For this batch, HPLC testing confirmed 92% purity — well above threshold. The Certificate of Analysis is hashed and stored on-chain."

**Key differentiator called out:** ✅ AI Check (informing lab decisions)

---

## Act 5 — The Manufacturer: Vedic Pharma (3:00 – 4:00)

**Screen:** Navigate to **Manufacturer** → `/manufacturer`

**What to show:**
1. **Formulations** tab → Find **"Immunity Booster Tablets"** (₹500 retail).
2. Click **View Chain of Custody** — this is the key screen.
3. Walk through the chain of custody card:
   - Harvest origin (Neemuch, MP) by Ram Singh
   - Processing events (SUN_DRYING)
   - Test certificates (PASSED, 92% purity, by Ayush Quality Labs)
   - Price transfers (₹200 to Ram Singh, ₹80 to Shakti Enterprises)

**Script:**
> "Vedic Pharma formulated this into Immunity Booster Tablets. This Chain of Custody view is *exactly* what a consumer will see when they scan the QR code on the bottle."

---

## Act 6 — The Fair-Trade Guarantee (4:00 – 5:00)

**Screen:** Still on the Chain of Custody screen.

**What to show:**
1. Point out the **Fair-Trade Share: 40.00%** badge.
2. Highlight the payment trail: ₹200 out of ₹500 went directly to Ram Singh.
3. Click **🔗 Verify On-Chain** on the formulation.

**Script:**
> "Most importantly — the consumer pays ₹500. We can *cryptographically prove* that Ram Singh, the original farmer, received ₹200. That's a **40% fair-trade share**, directly verifiable on the Polygon blockchain. No middleman can hide their cut."
>
> "That is Mūlpath: **verifiable origin** through geo-fencing, **AI-backed authenticity** through species verification, and **fair trade for farmers** — all provable on-chain."

---

## Summary of Differentiators

| # | Differentiator | Where It Appears |
|---|---------------|-----------------|
| 1 | **Geo-fencing Validation** | Collector Dashboard → Zone Validated ✅ badge |
| 2 | **AI Species Verification** | Collector Dashboard → AI confidence %; Lab Dashboard → AI badge informing test priority |
| 3 | **Fair-Trade % on Blockchain** | Manufacturer → Chain of Custody → 40% fair-trade share, payment trail |

---

**End of Demo** 🎤

