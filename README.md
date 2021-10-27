# Arbitrary Fork Simulations

## Setup
Run `npm install` to install the dependencies

Replace `<SET_ETH_RPC>` and `<SET_BLOCK_NUMBER>` with the appropriate values. The RPC must be an archive node.

Add all necesarry ABIs to the abis folder following the example format. Any contract you interact with needs an ABI if you didn't deploy it in the fork simulation.

If you are deploy a contract to the fork, place the source code in the `contracts` folder. Ensure the solidity version matches that of the compiler defined in `hardhat.config.ts`.

Import contract ABIs and create contracts instances as necassary in `scripts/simulate.ts`.

Set the `accountsToUnlock` array and create signers as necessary in `scripts/simulate.ts`.

Run the required simulations in `scripts/simulate.ts` `main`.

## Running
Use `npx hardhat run scripts/simulate.ts` to execute the simulation
- This command will compile all contracts as well
