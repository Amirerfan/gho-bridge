import { SupportedChainId } from '../constants/chains';
import { W3bNumber } from './web3';

export type TableData = {
  id: number;
  icon: string;
  symbol: string;
  chainData: {
    chainId: SupportedChainId;
    address: string;
    collateral: W3bNumber | null;
    canBeCollateral: boolean | null;
    usdPrice: W3bNumber | null;
  }[];
  chainlinkPriceFeedAddress: string;
};
