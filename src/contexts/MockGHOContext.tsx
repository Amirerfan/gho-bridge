import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import { W3bNumber } from '../types/web3';
import {
  useMockGhoMumbaiBalanceOf,
  useMockGhoSepoliaBalanceOf,
} from '../abis/types/generated';
import { useAccount } from 'wagmi';
import { SupportedChainId } from '../constants/chains';
import { w3bNumberFromBigint } from '../utils/web3';

const MockGHOContext = createContext<{
  mockGHOSepoliaBalance: null | W3bNumber;
  mockGHOMumbaiBalance: null | W3bNumber;
}>({
  mockGHOSepoliaBalance: null,
  mockGHOMumbaiBalance: null,
});

const MockGHOProvider = ({ children }: { children: ReactNode }) => {
  const [mockGHOSepoliaBalance, setMockGHOSepoliaBalance] =
    useState<null | W3bNumber>(null);
  const [mockGHOMumbaiBalance, setMockGHOMumbaiBalance] =
    useState<null | W3bNumber>(null);

  const { address: walletAddress } = useAccount();

  const { data: mockGHOSepoliaBalanceData } = useMockGhoSepoliaBalanceOf({
    args: walletAddress ? [walletAddress] : undefined,
    enabled: !!walletAddress,
    chainId: SupportedChainId.SEPOLIA,
    watch: true,
  });

  useEffect(() => {
    if (mockGHOSepoliaBalanceData !== undefined) {
      setMockGHOSepoliaBalance(w3bNumberFromBigint(mockGHOSepoliaBalanceData));
    } else console.log('no data for mockGHOSepoliaBalanceData');
  }, [mockGHOSepoliaBalanceData]);

  const { data: mockGHOMumbaiBalanceData } = useMockGhoMumbaiBalanceOf({
    args: walletAddress ? [walletAddress] : undefined,
    enabled: !!walletAddress,
    chainId: SupportedChainId.MUMBAI,
    watch: true,
  });

  useEffect(() => {
    if (mockGHOMumbaiBalanceData !== undefined) {
      setMockGHOMumbaiBalance(w3bNumberFromBigint(mockGHOMumbaiBalanceData));
    } else console.log('no data for mockGHOMumbaiBalanceData');
  }, [mockGHOMumbaiBalanceData]);

  return (
    <MockGHOContext.Provider
      value={{
        mockGHOSepoliaBalance,
        mockGHOMumbaiBalance,
      }}
    >
      {children}
    </MockGHOContext.Provider>
  );
};

const useMockGHOContext = () => {
  const context = useContext(MockGHOContext);

  if (context === undefined) {
    throw new Error('useMockGHOContext must be used within a MockGHOProvider');
  }

  return context;
};

export { MockGHOProvider, useMockGHOContext, MockGHOContext };
