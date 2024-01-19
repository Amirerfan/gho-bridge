import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import {
  useAaveUiPoolDataProviderMumbaiGetUserReservesData,
  useAaveUiPoolDataProviderSepoliaGetUserReservesData,
} from '../abis/types/generated';
import { SupportedChainId } from '../constants/chains';
import { useAccount } from 'wagmi';
import { POOL_ADDRESS_PROVIDER_ADDRESS } from '../constants/addresses';

const AaveUiPoolDataProviderV3Context = createContext<{
  aaveUiPoolDataProviderSepolia: any;
  aaveUiPoolDataProviderMumbai: any;
}>({
  aaveUiPoolDataProviderSepolia: undefined,
  aaveUiPoolDataProviderMumbai: undefined,
});

const AaveUiPoolDataProviderV3Provider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const { address: walletAddress } = useAccount();
  const [aaveUiPoolDataProviderSepolia, setAaveUiPoolDataProviderSepolia] =
    useState<undefined | any>(undefined);
  const [aaveUiPoolDataProviderMumbai, setAaveUiPoolDataProviderMumbai] =
    useState<undefined | any>(undefined);

  const { data: aaveUiPoolDataProviderSepoliaData } =
    useAaveUiPoolDataProviderSepoliaGetUserReservesData({
      args: walletAddress
        ? [
            POOL_ADDRESS_PROVIDER_ADDRESS[SupportedChainId.SEPOLIA],
            walletAddress,
          ]
        : undefined,
      watch: true,
      account: walletAddress,
      chainId: SupportedChainId.SEPOLIA,
      enabled: !!walletAddress,
    });

  useEffect(() => {
    if (aaveUiPoolDataProviderSepolia) {
      setAaveUiPoolDataProviderSepolia(aaveUiPoolDataProviderSepoliaData);
      console.log(aaveUiPoolDataProviderSepoliaData);
    } else console.log('no aaveUiPoolDataProviderSepolia');
  }, [aaveUiPoolDataProviderSepolia]);

  const { data: aaveUiPoolDataProviderMumbaiData } =
    useAaveUiPoolDataProviderMumbaiGetUserReservesData({
      args: walletAddress
        ? [
            POOL_ADDRESS_PROVIDER_ADDRESS[SupportedChainId.MUMBAI],
            walletAddress,
          ]
        : undefined,
      watch: true,
      account: walletAddress,
      chainId: SupportedChainId.MUMBAI,
      enabled: !!walletAddress,
    });

  useEffect(() => {
    if (aaveUiPoolDataProviderMumbai) {
      setAaveUiPoolDataProviderMumbai(aaveUiPoolDataProviderMumbaiData);
      console.log(aaveUiPoolDataProviderMumbaiData);
    } else console.log('no aaveUiPoolDataProviderMumbai');
  }, [aaveUiPoolDataProviderMumbai]);

  return (
    <AaveUiPoolDataProviderV3Context.Provider
      value={{
        aaveUiPoolDataProviderSepolia,
        aaveUiPoolDataProviderMumbai,
      }}
    >
      {children}
    </AaveUiPoolDataProviderV3Context.Provider>
  );
};

const useAaveUiPoolDataProviderV3Context = () => {
  const context = useContext(AaveUiPoolDataProviderV3Context);

  if (context === undefined) {
    throw new Error(
      'useAaveUiPoolDataProviderV3Context must be used within a AaveUiPoolDataProviderV3Provider',
    );
  }

  return context;
};

export {
  AaveUiPoolDataProviderV3Provider,
  useAaveUiPoolDataProviderV3Context,
  AaveUiPoolDataProviderV3Context,
};
