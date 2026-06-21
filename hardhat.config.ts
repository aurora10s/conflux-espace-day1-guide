import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "dotenv/config";

const PRIVATE_KEY = process.env.PRIVATE_KEY || "";

const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.24",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  networks: {
    eSpaceTestnet: {
      url: "https://evmtestnet.confluxrpc.com",
      chainId: 71,
      accounts: PRIVATE_KEY ? [PRIVATE_KEY] : [],
    },
    eSpaceMainnet: {
      url: "https://evm.confluxrpc.com",
      chainId: 1030,
      accounts: PRIVATE_KEY ? [PRIVATE_KEY] : [],
    },
  },
  etherscan: {
    apiKey: {
      eSpaceTestnet: "no-api-key-needed",
      eSpaceMainnet: "no-api-key-needed",
    },
    customChains: [
      {
        network: "eSpaceTestnet",
        chainId: 71,
        urls: {
          apiURL: "https://evmapi-testnet.confluxscan.org/api/",
          browserURL: "https://evmtestnet.confluxscan.org/",
        },
      },
      {
        network: "eSpaceMainnet",
        chainId: 1030,
        urls: {
          apiURL: "https://evmapi.confluxscan.org/api/",
          browserURL: "https://evm.confluxscan.org/",
        },
      },
    ],
  },
};

export default config;
