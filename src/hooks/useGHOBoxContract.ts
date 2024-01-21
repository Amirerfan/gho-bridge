import useWagmiContractWrite from './useWagmiContractWrite';
import { ghoBoxSepoliaABI } from '../abis/types/generated';
import { GHO_BOX_ADDRESS } from '../constants/addresses';
import { SupportedChainId } from '../constants/chains';
import { W3bNumber } from '../types/web3';
import { useCallback, useEffect, useState } from 'react';

const useGHOBoxContract = ({
  sepoliaAmount,
  mumbaiAmount,
}: {
  sepoliaAmount: W3bNumber;
  mumbaiAmount: W3bNumber;
}) => {
  const [thash, setThash] = useState<string | null>(null);
  const [ccip, setCcip] = useState<string | null>(null);

  const {
    callback: requestBorrowOnSepolia,
    isMetamaskLoading: sepoliaMetamaskLoading,
    isTransactionLoading: sepoliaTransactionLoading,
    isSuccess: sepoliaTransactionSuccess,
    transactionHash: sepoliaTX,
  } = useWagmiContractWrite({
    abi: ghoBoxSepoliaABI,
    address: GHO_BOX_ADDRESS[SupportedChainId.SEPOLIA],
    functionName: 'requestBorrow',
    args: [sepoliaAmount.big, mumbaiAmount.big],
    chainId: SupportedChainId.SEPOLIA,
  });

  const {
    callback: requestBorrowOnMumbai,
    isMetamaskLoading: mumbaiMetamaskLoading,
    isTransactionLoading: mumbaiTransactionLoading,
    isSuccess: mumbaiTransactionSuccess,
    transactionHash: mumbaiTX,
  } = useWagmiContractWrite({
    abi: ghoBoxSepoliaABI,
    address: GHO_BOX_ADDRESS[SupportedChainId.MUMBAI],
    functionName: 'requestBorrow',
    args: [mumbaiAmount.big, sepoliaAmount.big],
    chainId: SupportedChainId.MUMBAI,
  });

  const requestBorrow = useCallback(
    async (chain: SupportedChainId) => {
      if (chain === SupportedChainId.SEPOLIA) {
        await requestBorrowOnSepolia?.({
          pending: 'Requesting borrow on Sepolia...',
          success: 'Borrow request successful!',
          failed: 'Borrow request failed.',
        });
      } else if (chain === SupportedChainId.MUMBAI) {
        await requestBorrowOnMumbai?.({
          pending: 'Requesting borrow on Mumbai...',
          success: 'Borrow request successful!',
          failed: 'Borrow request failed.',
        });
      }
    },
    [requestBorrowOnMumbai, requestBorrowOnSepolia],
  );

  useEffect(() => {
    if (sepoliaTX) {
      setThash('https://sepolia.etherscan.io/tx/' + sepoliaTX);
      setCcip('https://ccip.chain.link/tx/' + sepoliaTX);
    } else if (mumbaiTX) {
      setThash('https://mumbai.polygonscan.com/tx/' + mumbaiTX);
      setCcip('https://ccip.chain.link/tx/' + mumbaiTX);
    }
  }, [sepoliaTX, mumbaiTX]);

  return {
    requestBorrow,
    thash,
    ccip,
    isMetamaskLoading: sepoliaMetamaskLoading || mumbaiMetamaskLoading,
    isTransactionLoading: sepoliaTransactionLoading || mumbaiTransactionLoading,
    isSuccess: sepoliaTransactionSuccess || mumbaiTransactionSuccess,
  };
};

export default useGHOBoxContract;
