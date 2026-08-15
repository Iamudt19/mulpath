# Mūlpath

Mūlpath (formerly VanaChain) is a blockchain-based botanical traceability platform for Ayurvedic herbs. This project is a full-stack web application consisting of a React frontend, Node.js backend, and Solidity smart contracts.

## Project Structure

- `/frontend`: React + Vite + Tailwind CSS frontend application.
- `/backend`: Node.js + Express backend with PostgreSQL using Prisma ORM.
- `/contracts`: Hardhat project with Solidity smart contracts targeting Polygon Amoy testnet.
- `/docs`: Architecture documentation and notes.

## Getting Started

### Prerequisites
- Node.js (v18+)
- npm or yarn
- PostgreSQL (running locally or remote)

### Running the Backend

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Copy `.env.example` to `.env` and set up your PostgreSQL connection string:
   ```env
   DATABASE_URL="postgresql://user:password@localhost:5432/mulpath?schema=public"
   ```
4. Push the Prisma schema to your database:
   ```bash
   npx prisma db push
   ```
5. Start the development server:
   ```bash
   npm run dev
   ```

### Running the Frontend

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the Vite development server:
   ```bash
   npm run dev
   ```
   The app will be available at `http://localhost:5173`.

### Running Smart Contracts

1. Navigate to the contracts directory:
   ```bash
   cd contracts
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Compile the contracts:
   ```bash
   npx hardhat compile
   ```
4. Run tests:
   ```bash
   npx hardhat test
   ```
5. Deploy to Polygon Amoy (requires configuring `.env` with your private key and RPC URL):
   ```bash
   npx hardhat run scripts/deploy.ts --network amoy
   ```
