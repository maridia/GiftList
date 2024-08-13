// Setup: npm install alchemy-sdk
const { Network, Alchemy } = require("alchemy-sdk");

// Optional Config object, but defaults to demo api-key and eth-mainnet.
const settings = {
  apiKey: "IHorYprRmQhrm_FodWPSbJEjgiLyxQPt", // Replace with your Alchemy API Key.
  network: Network.ETH_MAINNET, // Replace with your network.
};
// https://eth-mainnet.g.alchemy.com/v2/IHorYprRmQhrm_FodWPSbJEjgiLyxQPt

const alchemy = new Alchemy(settings);

async function main() {
  const latestBlock = await alchemy.core.getBlockNumber();
  console.log("The latest block number is", latestBlock);

  const gasEstimate = await alchemy.core.estimateGas({
    to: "vitalik.eth",
    // parsing 1 ETH to wei using Utils
    value: Utils.parseEther("1.0"),
  });
  console.log(gasEstimate);
}

main();