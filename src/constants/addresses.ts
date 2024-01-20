import { SupportedChainId } from './chains';

export type AddressMap = { [chainId: number]: `0x${string}` };

const SNOW_ADDRESS: AddressMap = {
  [SupportedChainId.SEPOLIA]: '0x17798d86AFdAbc1010A95E2ae6DbaD187c89b55E',
};

const GHO_ADDRESS: AddressMap = {
  [SupportedChainId.SEPOLIA]: '0xc4bF5CbDaBE595361438F8c6a187bDc330539c60',
};

const POOL_ADDRESS_PROVIDER_ADDRESS: AddressMap = {
  [SupportedChainId.SEPOLIA]: '0x012bAC54348C0E635dCAc9D5FB99f06F24136C9A',
  [SupportedChainId.MUMBAI]: '0x4CeDCB57Af02293231BAA9D39354D6BFDFD251e0',
};

const AAVE_UI_POOL_DATA_PROVIDER_ADDRESS: AddressMap = {
  [SupportedChainId.SEPOLIA]: '0x69529987FA4A075D0C00B0128fa848dc9ebbE9CE',
  [SupportedChainId.MUMBAI]: '0xD64dDe119f11C88850FD596BE11CE398CC5893e6',
};

const POOL_ADDRESS: AddressMap = {
  [SupportedChainId.SEPOLIA]: '0x6Ae43d3271ff6888e7Fc43Fd7321a503ff738951',
  [SupportedChainId.MUMBAI]: '0xcC6114B983E4Ed2737E9BD3961c9924e6216c704',
};

const AAVE_VARIABLE_DEBT_ADDRESS: AddressMap = {
  [SupportedChainId.SEPOLIA]: '0x67ae46EF043F7A4508BD1d6B94DB6c33F0915844',
  [SupportedChainId.MUMBAI]: '0x8584Fa491eAF3B959dE0888b5B5b9EF60660eb02',
};

const GHO_BOX_ADDRESS: AddressMap = {
  [SupportedChainId.SEPOLIA]: '0xf6f6356535e15853e34c8a18a0F290c07936AF7f',
  [SupportedChainId.MUMBAI]: '0x43EDbC85169dC2601Cf5Fe1DbD07f5B55B60DA2c',
};

const MOCK_GHO_ADDRESS: AddressMap = {
  [SupportedChainId.SEPOLIA]: '0x78b8B87092309e1a2f0dd793657Fa79016d1BF1D',
  [SupportedChainId.MUMBAI]: '0x6B0113982FF09Eb5835e6Fba27056b65d7caB49F',
};

export {
  SNOW_ADDRESS,
  GHO_ADDRESS,
  POOL_ADDRESS_PROVIDER_ADDRESS,
  AAVE_UI_POOL_DATA_PROVIDER_ADDRESS,
  POOL_ADDRESS,
  AAVE_VARIABLE_DEBT_ADDRESS,
  GHO_BOX_ADDRESS,
  MOCK_GHO_ADDRESS,
};
