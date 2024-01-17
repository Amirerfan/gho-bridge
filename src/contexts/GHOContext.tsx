import { createContext, ReactNode } from 'react';
import { useGhoBalanceOf } from '../abis/types/generated';

const GHOContext = createContext({});

const GHOProvider = ({ children }: { children: ReactNode }) => {
  const ghoBalance = useGhoBalanceOf({
    args: ['0x2BA839C06Df087a5a2c9d133769ad5E7e339744F'],
  });
  console.log('ghoBalance', ghoBalance);

  return <GHOContext.Provider value={{}}>{children}</GHOContext.Provider>;
};

export { GHOProvider, GHOContext };
