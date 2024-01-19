export enum SupportedChainId {
  SEPOLIA = 11155111,
  MUMBAI = 80001,
}

export function getCurrentChainId(): SupportedChainId {
  return Number(process.env.REACT_APP_CHAIN_ID) as SupportedChainId;
}
