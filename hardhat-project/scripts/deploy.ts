// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
import { HardhatUserConfig, internalTask, task } from "hardhat/config";
// import { hardhatArgum } from "hardhat";
import hre, { ethers } from "hardhat";
import { FEE, VRF_COORDINATOR, LINK_TOKEN, KEY_HASH } from "../constants";

async function main() {
  /*
 A ContractFactory in ethers.js is an abstraction used to deploy new smart contracts,
 so randomWinnerGame here is a factory for instances of our RandomWinnerGame contract.
 */
  const randomWinnerGame = await ethers.getContractFactory("RandomWinnerGame");
  // deploy the contract
  const deployedRandomWinnerGameContract = await randomWinnerGame.deploy(
    VRF_COORDINATOR,
    LINK_TOKEN,
    KEY_HASH,
    FEE
  );

  await deployedRandomWinnerGameContract.deployed();

  // print the address of the deployed contract
  console.log(
    "Verify Contract Address:",
    deployedRandomWinnerGameContract.address
  );

  console.log("Sleeping.....");
  // Wait for etherscan to notice that the contract has been deployed
  await sleep(30000);

  // Verify the contract after deploying
  await hre.run("verify:verify", {
    address: deployedRandomWinnerGameContract.address,
    constructorArguments: [VRF_COORDINATOR, LINK_TOKEN, KEY_HASH, FEE],
  });

  // await hre.run("verify:verify", {
  // task("verify", "verify the contract")
  //   .addParam("address", deployedRandomWinnerGameContract.address)
  //   .addParam("constructorArguments", "[VRF_COORDINATOR, LINK_TOKEN, KEY_HASH, FEE]")
  //   .setAction(verify());
  // // await task(
  //   "verify:verify", deployedRandomWinnerGameContract.address,
  //   "[VRF_COORDINATOR, LINK_TOKEN, KEY_HASH, FEE]",
  // );

}

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// Call the main function and catch if there is any error
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
