import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import {
  aaveVariableDebtMumbaiABI,
  aaveVariableDebtSepoliaABI,
  useAaveVariableDebtMumbaiBorrowAllowance,
  useAaveVariableDebtSepoliaBorrowAllowance,
} from '../abis/types/generated';
import {
  AAVE_VARIABLE_DEBT_ADDRESS,
  GHO_BOX_ADDRESS,
} from '../constants/addresses';
import { SupportedChainId } from '../constants/chains';
import { useAccount } from 'wagmi';
import { W3bNumber } from '../types/web3';
import { w3bNumberFromBigint, w3bNumberFromNumber } from '../utils/web3';
import useWagmiContractWrite from '../hooks/useWagmiContractWrite';

const AaveVariableDebtContext = createContext<{
  delegateSepolia: null | W3bNumber;
  delegateMumbai: null | W3bNumber;
  approveDelegation: ({ chainID }: { chainID: SupportedChainId }) => void;
}>({
  delegateSepolia: null,
  delegateMumbai: null,
  approveDelegation: () => {},
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

  const { callback: sepoliaDelegateCallback } = useWagmiContractWrite({
    abi: aaveVariableDebtSepoliaABI,
    address: AAVE_VARIABLE_DEBT_ADDRESS[SupportedChainId.SEPOLIA],
    args: [
      GHO_BOX_ADDRESS[SupportedChainId.SEPOLIA],
      w3bNumberFromBigint(BigInt(10 ** 18)).big,
    ],
    chainId: SupportedChainId.SEPOLIA,
    functionName: 'approveDelegation',
  });

  const { callback: mumbaiDelegateCallback } = useWagmiContractWrite({
    abi: aaveVariableDebtMumbaiABI,
    address: AAVE_VARIABLE_DEBT_ADDRESS[SupportedChainId.MUMBAI],
    args: [
      GHO_BOX_ADDRESS[SupportedChainId.MUMBAI],
      w3bNumberFromBigint(BigInt(10 ** 18)).big,
    ],
    chainId: SupportedChainId.MUMBAI,
    functionName: 'approveDelegation',
  });

  const approveDelegation = useCallback(
    async ({ chainID }: { chainID: SupportedChainId }) => {
      if (!walletAddress) return;
      try {
        if (chainID === SupportedChainId.SEPOLIA) {
          await sepoliaDelegateCallback?.();
        } else if (chainID === SupportedChainId.MUMBAI) {
          await mumbaiDelegateCallback?.();
        }
      } catch (e) {
        console.log(e);
      }
    },
    [walletAddress],
  );

  return (
    <AaveVariableDebtContext.Provider
      value={{
        delegateSepolia,
        delegateMumbai,
        approveDelegation,
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
