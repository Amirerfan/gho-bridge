import { SupportedChainId } from '../constants/chains';

export type SupportedCoin = {
  id: number;
  icon: string;
  symbol: string;
  chainAddress: {
    chainId: SupportedChainId;
    address: string;
  }[];
  chainlinkPriceFeedAddress: string;
};
