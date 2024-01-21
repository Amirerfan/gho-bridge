import { StateMessages } from '../types';
import { useMemo, useState } from 'react';
import { waitForTransaction, writeContract } from '@wagmi/core';
import toast from 'react-hot-toast';

const useWagmiContractWrite = ({
  abi,
  address,
  functionName,
  args,
  chainId,
  showErrorToast = false,
}: {
  abi: any;
  address: `0x${string}`;
  functionName: any;
  args: any;
  chainId: number;
  showErrorToast?: boolean;
}) => {
  const [isMetamaskLoading, setIsMetamaskLoading] = useState(false);
  const [isTransactionLoading, setIsTransactionLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isFailed, setIsFailed] = useState(false);
  const [transactionHash, setTransactionHash] = useState<string | null>(null);

  const callback = useMemo(() => {
    if (!abi || !address || !functionName || !args || !chainId) return null;
    return async (stateMessage: StateMessages) => {
      setIsMetamaskLoading(true);
      setIsFailed(false);
      setIsSuccess(false);
      try {
        const { hash } = await writeContract({
          abi: abi,
          address: address,
          functionName: functionName,
          args: args,
          chainId: chainId,
        });
        setIsMetamaskLoading(false);
        if (!hash) throw new Error('No hash returned from writeContract');
        setIsTransactionLoading(true);
        setTransactionHash(hash);
        const transaction = waitForTransaction({ hash: hash });
        await toast.promise(transaction, {
          loading: stateMessage.pending,
          success: stateMessage.success,
          error: stateMessage.failed,
        });
        setIsTransactionLoading(false);
        setIsSuccess(true);
      } catch (error: any) {
        console.log('error', error);
        setIsMetamaskLoading(false);
        setIsTransactionLoading(false);
        setIsFailed(true);
        if (showErrorToast) {
          if (error.message.includes('reason:'))
            if (error.message?.split('reason:\n')[1]?.split('\n')[0].length > 2)
              toast.error(error.message?.split('reason:\n')[1]?.split('\n')[0]);
        }
        throw error;
      }
    };
  }, [abi, address, functionName, args, chainId, showErrorToast]);
  return {
    callback,
    isMetamaskLoading,
    isTransactionLoading,
    isSuccess,
    isFailed,
    transactionHash,
  };
};

export default useWagmiContractWrite;
