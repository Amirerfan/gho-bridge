import { defineConfig } from '@wagmi/cli';
import ghoSepoliaABI from './src/abis/Sepolia/GHO';
import snowSepoliaABI from './src/abis/Sepolia/Snow';
import ghoUsdSepoliaABI from './src/abis/Sepolia/GHO-USD';
import { react } from '@wagmi/cli/plugins';

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
  ],
  plugins: [react()],
});