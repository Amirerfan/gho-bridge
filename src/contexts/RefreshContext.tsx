import React, { PropsWithChildren, useEffect, useState } from 'react';

const RefreshContext = React.createContext({
  slowRefresh: 0,
  mediumRefresh: 0,
  fastRefresh: 0,
});

const RefreshProvider = ({ children }: PropsWithChildren) => {
  const [slowRefresh, setSlowRefresh] = useState(1);
  const [fastRefresh, setFastRefresh] = useState(1);
  const [mediumRefresh, setMediumRefresh] = useState(1);

  useEffect(() => {
    const interval = setInterval(async () => {
      setFastRefresh((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(async () => {
      setMediumRefresh((prev) => prev + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(async () => {
      setSlowRefresh((prev) => prev + 1);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <RefreshContext.Provider
      value={{ slowRefresh, mediumRefresh, fastRefresh }}
    >
      {children}
    </RefreshContext.Provider>
  );
};

const useRefreshContext = () => {
  const context = React.useContext(RefreshContext);

  if (context === undefined) {
    throw new Error('useRefreshContext must be used within a RefreshProvider');
  }

  return context;
};

export { RefreshContext, RefreshProvider, useRefreshContext };
