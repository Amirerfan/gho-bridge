import { WagmiConfig, createConfig, configureChains } from 'wagmi';
import { ConnectKitProvider, getDefaultConfig } from 'connectkit';
import { createContext, ReactNode, useCallback, useContext } from 'react';
import { polygonMumbai, sepolia } from 'wagmi/chains';
import { jsonRpcProvider } from 'wagmi/providers/jsonRpc';
import { SupportedChainId } from '../constants/chains';

const Web3Context = createContext({});

const Web3Provider = ({ children }: { children: ReactNode }) => {
  const getRPCURL = useCallback((chainID: number) => {
    switch (chainID) {
      case SupportedChainId.SEPOLIA:
        return 'https://ethereum-sepolia.publicnode.com';
      case SupportedChainId.MUMBAI:
        return 'https://polygon-mumbai-bor.publicnode.com';
      default:
        return 'https://ethereum-sepolia.publicnode.com';
    }
  }, []);

  const { publicClient, chains } = configureChains(
    [sepolia, polygonMumbai],
    [
      jsonRpcProvider({
        rpc: (chain) => ({
          http: getRPCURL(chain.id),
        }),
      }),
    ],
  );

  const config = createConfig(
    getDefaultConfig({
      alchemyId: process.env.ALCHEMY_ID,
      walletConnectProjectId: process.env.WALLETCONNECT_PROJECT_ID!,
      chains,
      publicClient,
      appName: 'GHO Bridge',
      appIcon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/23508.png',
    }),
  );

  return (
    <WagmiConfig config={config}>
      <ConnectKitProvider>
        <Web3Context.Provider value={{}}>{children}</Web3Context.Provider>
      </ConnectKitProvider>
    </WagmiConfig>
  );
};

const useWeb3Context = () => {
  const context = useContext(Web3Context);

  if (context === undefined) {
    throw new Error('useWeb3Context must be used within a Web3Provider');
  }

  return context;
};

export { Web3Context, Web3Provider, useWeb3Context };
