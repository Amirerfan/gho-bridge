import { WagmiConfig, createConfig } from 'wagmi';
import { ConnectKitProvider, getDefaultConfig } from 'connectkit';
import { createContext, ReactNode, useContext } from 'react';
import { polygonMumbai, sepolia } from 'wagmi/chains';

const config = createConfig(
  getDefaultConfig({
    alchemyId: process.env.ALCHEMY_ID,
    walletConnectProjectId: process.env.WALLETCONNECT_PROJECT_ID!,

    chains: [sepolia, polygonMumbai],

    appName: 'GHO Bridge',
    appIcon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/23508.png',
  }),
);

const Web3Context = createContext({});

const Web3Provider = ({ children }: { children: ReactNode }) => {
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
