import { SupportedChainId } from './chains';

export type AddressMap = { [chainId: number]: `0x${string}` };

const SNOW_ADDRESS: AddressMap = {
  [SupportedChainId.SEPOLIA]: '0x17798d86AFdAbc1010A95E2ae6DbaD187c89b55E',
};

const GHO_ADDRESS: AddressMap = {
  [SupportedChainId.SEPOLIA]: '0xc4bF5CbDaBE595361438F8c6a187bDc330539c60',
};

export { SNOW_ADDRESS, GHO_ADDRESS };
