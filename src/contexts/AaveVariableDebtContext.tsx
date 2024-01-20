import { createContext, ReactNode, useContext } from 'react';

const AaveVariableDebtContext = createContext({});

const AaveVariableDebtProvider = ({ children }: { children: ReactNode }) => {
  return (
    <AaveVariableDebtContext.Provider value={{}}>
      {children}
    </AaveVariableDebtContext.Provider>
  );
};

const useAaveVariableDebt = () => {
  const context = useContext(AaveVariableDebtContext);

  if (context === undefined) {
    throw new Error(
      'useAaveVariableDebt must be used within a AaveVariableDebtProvider',
    );
  }

  return context;
};

export {
  AaveVariableDebtProvider,
  useAaveVariableDebt,
  AaveVariableDebtContext,
};
