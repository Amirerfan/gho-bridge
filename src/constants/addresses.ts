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

export {
  SNOW_ADDRESS,
  GHO_ADDRESS,
  POOL_ADDRESS_PROVIDER_ADDRESS,
  AAVE_UI_POOL_DATA_PROVIDER_ADDRESS,
};
