import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import {
  useGhoAllowance,
  useGhoApprove,
  useGhoBalanceOf,
  useGhoUsdLatestRoundData,
} from '../abis/types/generated';
import { w3bNumberFromBigint } from '../utils/web3';
import { W3bNumber } from '../types/web3';
import { useAccount } from 'wagmi';
import { SNOW_ADDRESS } from '../constants/addresses';
import { getCurrentChainId } from '../constants/chains';

const GHOContext = createContext<{
  ghoBalance: W3bNumber | undefined;
  ghoUsdPrice: W3bNumber | undefined;
  ghoAllowance: W3bNumber | undefined;
}>({
  ghoBalance: undefined,
  ghoUsdPrice: undefined,
  ghoAllowance: undefined,
});

const GHOProvider = ({ children }: { children: ReactNode }) => {
  const { address: walletAddress } = useAccount();

  const [ghoUsdPrice, setGhoUsdPrice] = useState<W3bNumber | undefined>(
    undefined,
  );
  const [ghoBalance, setGhoBalance] = useState<W3bNumber | undefined>(
    undefined,
  );
  const [ghoAllowance, setGhoAllowance] = useState<W3bNumber | undefined>(
    undefined,
  );

  console.log(process.env);

  const { data: ghoBalanceData } = useGhoBalanceOf({
    args: walletAddress ? [walletAddress] : undefined,
    enabled: false,
    account: walletAddress,
    watch: true,
  });

  useEffect(() => {
    if (ghoBalanceData !== undefined) {
      setGhoBalance(w3bNumberFromBigint(ghoBalanceData));
    }
  }, [ghoBalanceData]);

  const { data: ghoUsdPriceData } = useGhoUsdLatestRoundData({
    account: walletAddress,
    watch: true,
    enabled: false,
  });

  useEffect(() => {
    if (ghoUsdPriceData !== undefined) {
      setGhoUsdPrice(w3bNumberFromBigint(ghoUsdPriceData[1], 8));
    }
  }, [ghoUsdPriceData]);

  const { data: ghoAllowanceData } = useGhoAllowance({
    args: walletAddress
      ? [walletAddress, SNOW_ADDRESS[getCurrentChainId()]]
      : undefined,
    enabled: false,
    watch: true,
  });

  useEffect(() => {
    if (ghoAllowanceData !== undefined) {
      setGhoAllowance(w3bNumberFromBigint(ghoAllowanceData));
    }
  }, [ghoAllowanceData]);

  return (
    <GHOContext.Provider
      value={{
        ghoBalance,
        ghoUsdPrice,
        ghoAllowance,
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
