import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import * as dotenv from "dotenv";
import path from "path";

dotenv.config();
dotenv.config({ path: path.resolve(__dirname, "../backend/.env") });

const defaultPrivateKey = "0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80";

const config: HardhatUserConfig = {
  solidity: "0.8.24",
  networks: {
    hardhat: {
      type: "edr-simulated",
      chainId: 31337
    },
    amoy: {
      type: "http",
      url: process.env.AMOY_RPC_URL || process.env.RPC_URL || "https://polygon-amoy.drpc.org",
      accounts: [process.env.PRIVATE_KEY || defaultPrivateKey]
    },
    sepolia: {
      type: "http",
      url: process.env.SEPOLIA_RPC_URL || process.env.RPC_URL || "https://ethereum-sepolia-rpc.publicnode.com",
      accounts: [process.env.PRIVATE_KEY || defaultPrivateKey]
    }
  }
};

export default config;
