import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import {
  useGhoBalanceOf,
  useGhoUsdLatestRoundData,
} from '../abis/types/generated';
import { w3bNumberFromBigint } from '../utils/web3';
import { W3bNumber } from '../types/web3';
import { useAccount } from 'wagmi';

const GHOContext = createContext<{
  ghoBalance: W3bNumber | undefined;
  ghoUsdPrice: W3bNumber | undefined;
}>({
  ghoBalance: undefined,
  ghoUsdPrice: undefined,
});

const GHOProvider = ({ children }: { children: ReactNode }) => {
  const { address: walletAddress } = useAccount();

  const [ghoUsdPrice, setGhoUsdPrice] = useState<W3bNumber | undefined>(
    undefined,
  );
  const [ghoBalance, setGhoBalance] = useState<W3bNumber | undefined>(
    undefined,
  );

  const { data: ghoBalanceData } = useGhoBalanceOf({
    args: walletAddress ? [walletAddress] : undefined,
    enabled: !!walletAddress,
  });

  useEffect(() => {
    if (ghoBalanceData) {
      setGhoBalance(w3bNumberFromBigint(ghoBalanceData));
    }
  }, [ghoBalanceData]);

  const { data: ghoUsdPriceData } = useGhoUsdLatestRoundData({});

  useEffect(() => {
    if (ghoUsdPriceData) {
      setGhoUsdPrice(w3bNumberFromBigint(ghoUsdPriceData[1], 8));
    }
  }, [ghoUsdPriceData]);

  return (
    <GHOContext.Provider
      value={{
        ghoBalance,
        ghoUsdPrice,
      }}
    >
      {children}
    </GHOContext.Provider>
  );
};

const useGHOContext = () => {
  const context = useContext(GHOContext);

  if (context === undefined) {
    throw new Error('useGHOContext must be used within a GHOProvider');
  }

  return context;
};

export { GHOProvider, GHOContext, useGHOContext };
