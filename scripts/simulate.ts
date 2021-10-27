// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
import { ethers } from "hardhat";
const hre = require("hardhat");
const fs = require("fs");

// Import Contact ABIs (if not deploying through HardHat)
let cREPAbi = JSON.parse(fs.readFileSync("./abis/crep.abi"));

// List of accounts to enable sending transactions from without private key
const accountsToUnlock: string[] = [
  "0x2B384212EDc04Ae8bB41738D05BA20E33277bf33",
];

async function initializeFork() {
  // Setup fork
  await hre.network.provider.request({
    method: "hardhat_reset",
    params: [
      {
        forking: {
          jsonRpcUrl: "<SET_ETH_RPC>",
          blockNumber: "<SET_BLOCK_NUMBER>",
        },
      },
    ],
  });

  // unlock accounts
  for (const account of accountsToUnlock) {
    await hre.network.provider.request({
      method: "hardhat_impersonateAccount",
      params: [account],
    });
  }
}

async function main() {
  // Setup fork
  await initializeFork();

  // Get necessary signers (must be unlocked)
  // const arr00Signer = await ethers.getSigner(
  //   "0x2B384212EDc04Ae8bB41738D05BA20E33277bf33"
  // );

  // Send ETH example
  // arr00Signer.sendTransaction({
  //   to: "0x50D5587403F096dc1ad81164670046182a635221",
  //   value: ethers.utils.parseEther("0.001"),
  // });

  // Example Contract creation from live on chain contract
  // let cREP = new ethers.Contract("0x158079ee67fce2f58472a96584a73c7ab9ac95c1",cREPAbi,arr00Signer);

  // Create and deploy a new contract
  // const Greeter = await ethers.getContractFactory("Greeter");
  // const greeter = await Greeter.deploy("Hello, Hardhat!");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
