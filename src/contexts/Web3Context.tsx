import {WagmiConfig, createConfig} from "wagmi";
import {ConnectKitProvider, getDefaultConfig} from "connectkit";
import {createContext, ReactNode} from "react";


const config = createConfig(
	getDefaultConfig({
		alchemyId: process.env.ALCHEMY_ID,
		walletConnectProjectId: process.env.WALLETCONNECT_PROJECT_ID!,

		appName: "GHO Bridge",
		appIcon: "https://s2.coinmarketcap.com/static/img/coins/64x64/23508.png",
	}),
);

const Web3Context = createContext({});

const Web3Provider = ({children}: { children: ReactNode }) => {
	return (
			<WagmiConfig config={config}>
				<ConnectKitProvider>
					<Web3Context.Provider value={{}}>{children}</Web3Context.Provider>
				</ConnectKitProvider>
			</WagmiConfig>
	);
}

export {Web3Context, Web3Provider};
