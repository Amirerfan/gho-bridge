import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import { SupportedCoins } from '../constants/coins';
import { SupportedCoin } from '../types/coins';
import { getUSDPricesAPI } from '../apis';
import { useRefreshContext } from './RefreshContext';

const CollateralCoinsContext = createContext<{
  supportedCoins: SupportedCoin[];
  usdPrices: any;
}>({
  supportedCoins: [],
  usdPrices: [],
});

const CollateralCoinsProvider = ({ children }: { children: ReactNode }) => {
  const [supportedCoins, setSupportedCoins] = useState(SupportedCoins);
  const { fastRefresh } = useRefreshContext();
  const [usdPrices, setUsdPrices] = useState(null);

  useEffect(() => {
    getUSDPricesAPI().then((response) => {
      setUsdPrices(response);
    });
  }, [fastRefresh]);

  return (
    <CollateralCoinsContext.Provider
      value={{
        supportedCoins,
        usdPrices,
      }}
    >
      {children}
    </CollateralCoinsContext.Provider>
  );
};

const useCollateralCoinsContext = () => {
  const context = useContext(CollateralCoinsContext);

  if (context === undefined) {
    throw new Error(
      'useCollateralCoinsContext must be used within a CollateralCoinsProvider',
    );
  }

  return context;
};

export {
  CollateralCoinsContext,
  CollateralCoinsProvider,
  useCollateralCoinsContext,
};
