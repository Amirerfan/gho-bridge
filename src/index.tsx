import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import { Web3Provider } from './contexts/Web3Context';
import { GHOProvider } from './contexts/GHOContext';
import { CollateralCoinsProvider } from './contexts/CollateralCoinsContext';
import { AaveUiPoolDataProviderV3Provider } from './contexts/AaveUiPoolDataProviderV3Context';
import { PoolProvider } from './contexts/PoolContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <Web3Provider>
      <CollateralCoinsProvider>
        <AaveUiPoolDataProviderV3Provider>
          <PoolProvider>
            <GHOProvider>
              <App />
            </GHOProvider>
          </PoolProvider>
        </AaveUiPoolDataProviderV3Provider>
      </CollateralCoinsProvider>
    </Web3Provider>
  </React.StrictMode>,
);
