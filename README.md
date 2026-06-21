# Conflux eSpace Day 1 Developer Onboarding

A practical "Day 1 to first deployed contract" path for Ethereum developers moving to **Conflux eSpace**.

By the end of this guide, you will:

- Add Conflux eSpace Testnet to MetaMask
- Get testnet CFX from the eSpace faucet
- Configure Hardhat for Conflux eSpace
- Deploy a Solidity contract
- Verify the contract on ConfluxScan
- Interact with the deployed contract

---

## Why eSpace?

Conflux has two spaces that developers often confuse:

| Space | What it is | Address / tooling |
|---|---|---|
| **eSpace** | EVM-compatible environment on Conflux | Ethereum-style `0x...` addresses, MetaMask, Hardhat, Foundry, Remix |
| **Core Space** | Native Conflux environment | Native Conflux address format and Core-specific tooling |

If you are coming from Ethereum, start with **eSpace**.

---

## Network Configuration

### Conflux eSpace Mainnet

| Field | Value |
|---|---|
| Network Name | Conflux eSpace |
| RPC URL | `https://evm.confluxrpc.com` |
| Chain ID | `1030` |
| Currency Symbol | `CFX` |
| Block Explorer | `https://evm.confluxscan.org` |

### Conflux eSpace Testnet

| Field | Value |
|---|---|
| Network Name | Conflux eSpace Testnet |
| RPC URL | `https://evmtestnet.confluxrpc.com` |
| Chain ID | `71` |
| Currency Symbol | `CFX` |
| Block Explorer | `https://evmtestnet.confluxscan.org` |

---

## Prerequisites

Install:

- Node.js 18+
- npm or yarn
- MetaMask
- Git

Check your versions:

```bash
node -v
npm -v
git --version
```

---

## Step 1: Add Conflux eSpace Testnet to MetaMask

Open MetaMask and add a custom network:

```text
Network Name: Conflux eSpace Testnet
RPC URL: https://evmtestnet.confluxrpc.com
Chain ID: 71
Currency Symbol: CFX
Block Explorer URL: https://evmtestnet.confluxscan.org
```

Make sure your active network is **Conflux eSpace Testnet** before deploying.

---

## Step 2: Get Testnet CFX

You need CFX to pay gas on Conflux eSpace.

1. Open the eSpace faucet: `https://efaucet.confluxnetwork.org`
2. Paste your MetaMask `0x...` address
3. Request testnet CFX
4. Check your balance in MetaMask or on the testnet explorer

Important: use your **eSpace / EVM address**, not a Core Space address.

---

## Step 3: Clone This Repo

```bash
git clone https://github.com/aurora10s/conflux-espace-day1-guide.git
cd conflux-espace-day1-guide
npm install
```

---

## Step 4: Configure Environment Variables

Create your local `.env` file:

```bash
cp .env.example .env
```

Open `.env` and add your private key:

```bash
PRIVATE_KEY=0xyour_private_key_here
```

Never commit your real `.env` file.

---

## Step 5: Compile the Contract

```bash
npm run compile
```

This compiles `contracts/HelloConflux.sol`.

---

## Step 6: Run Local Tests

```bash
npm test
```

Expected result:

```text
HelloConflux
  ✔ deploys with the initial message
  ✔ updates the message
```

---

## Step 7: Deploy to Conflux eSpace Testnet

```bash
npm run deploy:testnet
```

Expected output:

```text
Deploying HelloConflux with: 0xYourWallet
HelloConflux deployed to: 0xContractAddress
Initial message: Hello Conflux eSpace
```

Copy the deployed contract address.

---

## Step 8: Verify the Contract on ConfluxScan

Use the deployed contract address:

```bash
npx hardhat verify --network eSpaceTestnet <CONTRACT_ADDRESS> "Hello Conflux eSpace"
```

Example:

```bash
npx hardhat verify --network eSpaceTestnet 0x1234567890abcdef1234567890abcdef12345678 "Hello Conflux eSpace"
```

After verification, open:

```text
https://evmtestnet.confluxscan.org/address/<CONTRACT_ADDRESS>
```

---

## Step 9: Interact With the Contract

Add your deployed contract address to `.env`:

```bash
CONTRACT_ADDRESS=0xyour_deployed_contract_address
```

Read the current message:

```bash
npm run read:testnet
```

Update the message:

```bash
npm run update:testnet
```

---

## Common Pitfalls

### 1. Using Core Space instead of eSpace

If your address is not an Ethereum-style `0x...` address, you are probably using the wrong space.

For this guide, always use:

- MetaMask
- eSpace RPC
- eSpace faucet
- eSpace explorer

### 2. Wrong RPC or Chain ID

If MetaMask or Hardhat cannot connect, check:

```text
RPC: https://evmtestnet.confluxrpc.com
Chain ID: 71
```

### 3. Faucet funds do not show up

Try:

- Confirm your wallet is on Conflux eSpace Testnet
- Check the address on the explorer
- Wait a few minutes
- Recheck that you submitted an EVM `0x...` address

### 4. Deployment fails with gas or balance errors

You may not have enough testnet CFX. Request more from the faucet and try again.

### 5. Verification fails

Check that your verification settings match deployment settings:

- Solidity compiler version
- Optimizer enabled/disabled
- Constructor arguments
- Contract address
- Correct network

This sample uses:

```text
Solidity: 0.8.24
Optimizer: enabled
Runs: 200
Constructor argument: "Hello Conflux eSpace"
```

---

## Project Structure

```text
conflux-espace-day1-guide/
├── contracts/
│   └── HelloConflux.sol
├── scripts/
│   ├── deploy.ts
│   ├── read.ts
│   └── update.ts
├── test/
│   └── HelloConflux.ts
├── docs/
│   └── troubleshooting.md
├── hardhat.config.ts
├── package.json
├── tsconfig.json
├── .env.example
└── README.md
```

---

## Useful Commands

```bash
npm install
npm run compile
npm test
npm run deploy:testnet
npm run read:testnet
npm run update:testnet
npx hardhat verify --network eSpaceTestnet <CONTRACT_ADDRESS> "Hello Conflux eSpace"
```

---

## Final Checklist Before Submitting the Bounty

- [ ] Repo is public
- [ ] README is complete
- [ ] `.env.example` is included
- [ ] Real `.env` is not committed
- [ ] Contract compiles
- [ ] Tests pass
- [ ] Deployment works on eSpace Testnet
- [ ] Contract is verified on ConfluxScan
- [ ] Explorer link is added to your X post
- [ ] X post includes the GitHub repo link

---

