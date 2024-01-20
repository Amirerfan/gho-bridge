import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import {
  useAaveVariableDebtMumbaiBorrowAllowance,
  useAaveVariableDebtSepoliaBorrowAllowance,
} from '../abis/types/generated';
import { GHO_BOX_ADDRESS } from '../constants/addresses';
import { SupportedChainId } from '../constants/chains';
import { useAccount } from 'wagmi';
import { W3bNumber } from '../types/web3';
import { w3bNumberFromBigint } from '../utils/web3';

const AaveVariableDebtContext = createContext<{
  delegateSepolia: null | W3bNumber;
  delegateMumbai: null | W3bNumber;
}>({
  delegateSepolia: null,
  delegateMumbai: null,
});

const AaveVariableDebtProvider = ({ children }: { children: ReactNode }) => {
  const [delegateSepolia, setDelegateSepolia] = useState<null | W3bNumber>(
    null,
  );
  const [delegateMumbai, setDelegateMumbai] = useState<null | W3bNumber>(null);

  const { address: walletAddress } = useAccount();

  const { data: delegateSepoliaData } =
    useAaveVariableDebtSepoliaBorrowAllowance({
      args: walletAddress
        ? [walletAddress, GHO_BOX_ADDRESS[SupportedChainId.SEPOLIA]]
        : undefined,
      chainId: SupportedChainId.SEPOLIA,
      enabled: !!walletAddress,
      watch: true,
    });

  useEffect(() => {
    if (delegateSepoliaData !== undefined) {
      setDelegateSepolia(w3bNumberFromBigint(delegateSepoliaData));
    } else console.log('no delegate data');
  }, [delegateSepoliaData]);

  const { data: delegateMumbaiData } = useAaveVariableDebtMumbaiBorrowAllowance(
    {
      args: walletAddress
        ? [walletAddress, GHO_BOX_ADDRESS[SupportedChainId.MUMBAI]]
        : undefined,
      chainId: SupportedChainId.MUMBAI,
      enabled: !!walletAddress,
      watch: true,
    },
  );

  useEffect(() => {
    if (delegateMumbaiData !== undefined) {
      setDelegateMumbai(w3bNumberFromBigint(delegateMumbaiData));
    } else console.log('no delegate data');
  }, [delegateMumbaiData]);

  return (
    <AaveVariableDebtContext.Provider
      value={{
        delegateSepolia,
        delegateMumbai,
      }}
    >
      {children}
    </AaveVariableDebtContext.Provider>
  );
};

const useAaveVariableDebtContext = () => {
  const context = useContext(AaveVariableDebtContext);

  if (context === undefined) {
    throw new Error(
      'useAaveVariableDebtContext must be used within a AaveVariableDebtProvider',
    );
  }

  return context;
};

export {
  AaveVariableDebtProvider,
  useAaveVariableDebtContext,
  AaveVariableDebtContext,
};
