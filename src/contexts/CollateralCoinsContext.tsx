import { createContext, ReactNode, useContext, useState } from 'react';
import { SupportedCoins } from '../constants/coins';
import { SupportedCoin } from '../types/coins';

const CollateralCoinsContext = createContext<{
  supportedCoins: SupportedCoin[];
}>({
  supportedCoins: [],
});

const CollateralCoinsProvider = ({ children }: { children: ReactNode }) => {
  const [supportedCoins, setSupportedCoins] = useState(SupportedCoins);

  return (
    <CollateralCoinsContext.Provider
      value={{
        supportedCoins,
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
