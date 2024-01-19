import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import {
  usePoolMumbaiGetUserAccountData,
  usePoolSepoliaGetUserAccountData,
} from '../abis/types/generated';
import { useAccount } from 'wagmi';
import { SupportedChainId } from '../constants/chains';

const PoolContext = createContext<{
  poolDataSepolia: null | any;
  poolDataMumbai: null | any;
}>({
  poolDataSepolia: null,
  poolDataMumbai: null,
});

const PoolProvider = ({ children }: { children: ReactNode }) => {
  const [poolDataSepolia, setPoolDataSepolia] = useState<null | any>(null);
  const [poolDataMumbai, setPoolDataMumbai] = useState<null | any>(null);
  const { address: walletAddress } = useAccount();

  const { data: poolDataSepoliaData } = usePoolSepoliaGetUserAccountData({
    args: walletAddress ? [walletAddress] : undefined,
    enabled: !!walletAddress,
    account: walletAddress,
    chainId: SupportedChainId.SEPOLIA,
    watch: true,
  });

  useEffect(() => {
    if (poolDataSepoliaData !== undefined) {
      setPoolDataSepolia(poolDataSepoliaData);
    } else console.log('poolDataSepoliaData is undefined');
  }, [poolDataSepoliaData]);

  const { data: poolDataMumbaiData } = usePoolMumbaiGetUserAccountData({
    args: walletAddress ? [walletAddress] : undefined,
    enabled: !!walletAddress,
    account: walletAddress,
    chainId: SupportedChainId.MUMBAI,
    watch: true,
  });

  useEffect(() => {
    if (poolDataMumbaiData !== undefined) {
      setPoolDataMumbai(poolDataMumbaiData);
    } else console.log('poolDataMumbaiData is undefined');
  }, [poolDataMumbaiData]);

  return (
    <PoolContext.Provider
      value={{
        poolDataSepolia,
        poolDataMumbai,
      }}
    >
      {children}
    </PoolContext.Provider>
  );
};

const usePoolContext = () => {
  const context = useContext(PoolContext);

  if (context === undefined) {
    throw new Error('usePoolContext must be used within a PoolProvider');
  }

  return context;
};

export { PoolProvider, PoolContext, usePoolContext };
