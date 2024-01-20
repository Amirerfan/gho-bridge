import { defineConfig } from '@wagmi/cli';
import ghoSepoliaABI from './src/abis/Sepolia/GHO';
import snowSepoliaABI from './src/abis/Sepolia/Snow';
import ghoUsdSepoliaABI from './src/abis/Sepolia/GHO-USD';
import { react } from '@wagmi/cli/plugins';
import { SupportedChainId } from './src/constants/chains';
import {
  AAVE_UI_POOL_DATA_PROVIDER_ADDRESS,
  AAVE_VARIABLE_DEBT_ADDRESS,
  GHO_BOX_ADDRESS,
  POOL_ADDRESS,
} from './src/constants/addresses';
import aaveUiPoolDataProviderV3SepoliaABI from './src/abis/Sepolia/AaveUiPoolDataProviderV3';
import aaveUiPoolDataProviderV3MumbaiABI from './src/abis/Mumbai/AaveUiPoolDataProviderV3';
import poolSepoliaABI from './src/abis/Sepolia/Pool';
import poolMumbaiABI from './src/abis/Mumbai/Pool';
import aaveVariableDebtSepoliaABI from './src/abis/Sepolia/AaveVariableDebt';
import aaveVariableDebtMumbaiABI from './src/abis/Mumbai/AaveVariableDebt';
import ghoBoxSepoliaABI from './src/abis/Sepolia/GhoBox';
import ghoBoxMumbaiABI from './src/abis/Mumbai/GhoBox';

export default defineConfig({
  out: 'src/abis/types/generated.ts',
  contracts: [
    {
      name: 'gho',
      address: '0xc4bF5CbDaBE595361438F8c6a187bDc330539c60',
      abi: ghoSepoliaABI,
    },
    {
      name: 'snow',
      address: '0x17798d86AFdAbc1010A95E2ae6DbaD187c89b55E',
      abi: snowSepoliaABI,
    },
    {
      name: 'ghoUsd',
      address: '0x635A86F9fdD16Ff09A0701C305D3a845F1758b8E',
      abi: ghoUsdSepoliaABI,
    },
    {
      name: 'aaveUiPoolDataProviderSepolia',
      address: AAVE_UI_POOL_DATA_PROVIDER_ADDRESS[SupportedChainId.SEPOLIA],
      abi: aaveUiPoolDataProviderV3SepoliaABI,
    },
    {
      name: 'aaveUiPoolDataProviderMumbai',
      address: AAVE_UI_POOL_DATA_PROVIDER_ADDRESS[SupportedChainId.MUMBAI],
      abi: aaveUiPoolDataProviderV3MumbaiABI,
    },
    {
      name: 'poolSepolia',
      address: POOL_ADDRESS[SupportedChainId.SEPOLIA],
      abi: poolSepoliaABI,
    },
    {
      name: 'poolMumbai',
      address: POOL_ADDRESS[SupportedChainId.MUMBAI],
      abi: poolMumbaiABI,
    },
    {
      name: 'aaveVariableDebtSepolia',
      address: AAVE_VARIABLE_DEBT_ADDRESS[SupportedChainId.SEPOLIA],
      abi: aaveVariableDebtSepoliaABI,
    },
    {
      name: 'aaveVariableDebtMumbai',
      address: AAVE_VARIABLE_DEBT_ADDRESS[SupportedChainId.MUMBAI],
      abi: aaveVariableDebtMumbaiABI,
    },
    {
      name: 'ghoBoxSepolia',
      address: GHO_BOX_ADDRESS[SupportedChainId.SEPOLIA],
      abi: ghoBoxSepoliaABI,
    },
    {
      name: 'ghoBoxMumbai',
      address: GHO_BOX_ADDRESS[SupportedChainId.MUMBAI],
      abi: ghoBoxMumbaiABI,
    },
  ],
  plugins: [react()],
});
