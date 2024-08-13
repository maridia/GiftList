const { Alchemy, Network, Wallet, Utils } = require("alchemy-sdk");
require("dotenv").config();

// Address: 0xB8E36bC625B2C9614AD689a625433D2f8121722b
// Private Key: 0xdefd70781ee6c550597af0b7d1892d5e026430ec57ced9193cb3c93df6c59748
// Mnemonic: garden salute auction simple paper meadow nurse ghost hobby oak viable trouble

// Address: 0x743dC4A3bEE2ECA232b11283cE9a6B9370FB70A0
// Private Key: 0xb0443c91f13bfcc83fe5f7d7f0e17eaa824ca4a0c4815c9ae410ea86431fbd82
// Mnemonic: eager trouble nephew portion more horse wall pave music moral film fashion

const { TEST_API_KEY, TEST_PRIVATE_KEY } = process.env;

const settings = {
  apiKey: TEST_API_KEY,
  network: Network.ETH_SEPOLIA,
};
const alchemy = new Alchemy(settings);

let wallet = new Wallet(TEST_PRIVATE_KEY);

async function main() {
  const nonce = await alchemy.core.getTransactionCount(
    wallet.address,
    "latest"
  );

  let transaction = {
    to: "0x743dC4A3bEE2ECA232b11283cE9a6B9370FB70A0",
    value: Utils.parseEther("0.001"), // 0.001 worth of ETH being sent
    gasLimit: "21000",
    maxPriorityFeePerGas: Utils.parseUnits("5", "gwei"),
    maxFeePerGas: Utils.parseUnits("20", "gwei"),
    nonce: nonce,
    type: 2,
    chainId: 11155111, // 5 is for göerli transaction
  };

  let rawTransaction = await wallet.signTransaction(transaction);
  console.log("Raw tx: ", rawTransaction);
  let tx = await alchemy.core.sendTransaction(rawTransaction);
  console.log(`https://goerli.etherscan.io/tx/${tx.hash}`);
}

main();
