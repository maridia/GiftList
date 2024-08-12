const axios = require('axios');
const niceList = require('../utils/niceList.json');
const MerkleTree = require('../utils/MerkleTree');

const serverUrl = 'http://localhost:1225';

async function main() {
  // TODO: how do we prove to the server we're on the nice list? 
  const merkleTree = new MerkleTree(niceList);
  const MERKLE_ROOT = merkleTree.getRoot();
  let index = 0;

  const { data: gift } = await axios.post(`${serverUrl}/gift`, {
    // TODO: add request body parameters here!
    proof: merkleTree.getProof(index, layer = merkleTree.leaves),
    name: niceList[index],
  });

  console.log(niceList[index]);
  console.log({ gift });

}

main();