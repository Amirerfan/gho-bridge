import { W3bNumber } from '../types/web3';
import { useGHOContext } from '../contexts/GHOContext';
import { ghoABI, snowABI } from '../abis/types/generated';
import { getCurrentChainId } from '../constants/chains';
import { GHO_ADDRESS, SNOW_ADDRESS } from '../constants/addresses';
import { waitForTransaction, writeContract } from '@wagmi/core';
import { useAccount } from 'wagmi';

const useSnowContract = () => {
  const { ghoAllowance } = useGHOContext();
  const { address: walletAddress } = useAccount();
  const approveAndFrost = async (amount: W3bNumber) => {
    if (!walletAddress) return;

    if (ghoAllowance && !(ghoAllowance.big < amount.big)) {
      try {
        const { hash } = await writeContract({
          abi: ghoABI,
          address: GHO_ADDRESS[getCurrentChainId()],
          functionName: 'approve',
          args: [SNOW_ADDRESS[getCurrentChainId()], amount.big],
        });
        if (!hash) return;

        const { status } = await waitForTransaction({ hash });

        if (status !== 'success') return;

        await writeContract({
          abi: snowABI,
          address: SNOW_ADDRESS[getCurrentChainId()],
          functionName: 'frost',
          args: [walletAddress, amount.big],
        });
      } catch (error) {
        console.error(error);
      }
    }
  };

  return {
    approveAndFrost,
  };
};

export default useSnowContract;
