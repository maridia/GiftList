// Github: https://github.com/alchemyplatform/alchemy-sdk-js
import { Network, Alchemy } from "alchemy-sdk";

const settings = {
  apiKey: "IHorYprRmQhrm_FodWPSbJEjgiLyxQPt",
  network: Network.ETH_MAINNET,
};
const alchemy = new Alchemy(settings);

alchemy.core.getBlockNumber("finalized").then(console.log);


