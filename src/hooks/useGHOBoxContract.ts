import useWagmiContractWrite from './useWagmiContractWrite';
import { ghoBoxSepoliaABI } from '../abis/types/generated';
import { GHO_BOX_ADDRESS } from '../constants/addresses';
import { SupportedChainId } from '../constants/chains';
import { W3bNumber } from '../types/web3';
import { useCallback } from 'react';

const useGHOBoxContract = ({
  sepoliaAmount,
  mumbaiAmount,
}: {
  sepoliaAmount: W3bNumber;
  mumbaiAmount: W3bNumber;
}) => {
  const { callback: requestBorrowOnSepolia } = useWagmiContractWrite({
    abi: ghoBoxSepoliaABI,
    address: GHO_BOX_ADDRESS[SupportedChainId.SEPOLIA],
    functionName: 'requestBorrow',
    args: [sepoliaAmount.big, mumbaiAmount.big],
    chainId: SupportedChainId.SEPOLIA,
  });

  const { callback: requestBorrowOnMumbai } = useWagmiContractWrite({
    abi: ghoBoxSepoliaABI,
    address: GHO_BOX_ADDRESS[SupportedChainId.MUMBAI],
    functionName: 'requestBorrow',
    args: [sepoliaAmount.big, mumbaiAmount.big],
    chainId: SupportedChainId.MUMBAI,
  });

  const requestBorrow = useCallback(
    async (chain: SupportedChainId) => {
      if (chain === SupportedChainId.SEPOLIA) {
        console.log('amounts', sepoliaAmount, mumbaiAmount);
        await requestBorrowOnSepolia?.();
      } else if (chain === SupportedChainId.MUMBAI) {
        console.log('amounts', sepoliaAmount, mumbaiAmount);
        await requestBorrowOnMumbai?.();
      }
    },
    [requestBorrowOnMumbai, requestBorrowOnSepolia],
  );

  return {
    requestBorrow,
  };
};

export default useGHOBoxContract;
