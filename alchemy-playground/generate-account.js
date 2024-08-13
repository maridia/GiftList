const ethers = require('ethers');

function generateAccount() {
  const wallet = ethers.Wallet.createRandom();
  console.log('Address:', wallet.address);
  console.log('Private Key:', wallet.privateKey);
  console.log('Mnemonic:', wallet.mnemonic.phrase);
}

generateAccount();

// Address: 0xB8E36bC625B2C9614AD689a625433D2f8121722b
// Private Key: 0xdefd70781ee6c550597af0b7d1892d5e026430ec57ced9193cb3c93df6c59748
// Mnemonic: garden salute auction simple paper meadow nurse ghost hobby oak viable trouble