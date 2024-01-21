import { useAccount } from 'wagmi';
import { useEffect } from 'react';
import { useNavigate, useNavigation } from 'react-router-dom';
import { ConnectButton } from '../components/ConnectButton';

const ConnectWallet = () => {
  const { isConnected } = useAccount();
  const navigate = useNavigate();

  useEffect(() => {
    if (isConnected) {
      navigate('/');
    }
  }, [isConnected]);

  return (
    <div className="justify-center items-center pt-[20vh]">
      <div className="card px-20 py-16 pb-12 rounded-2xl flex flex-col gap-6 justify-center text-center bg-gradient-to-r from-primary-light-2 to-primary w-fit mx-auto">
        <img src="/assets/images/wallet.svg" alt="" className="w-16 mx-auto" />
        <h1 className="text-white font-semibold text-2xl text-center mb-6">
          Please connect your wallet
        </h1>
        <div className="max-w-[300px] mx-auto">
          <ConnectButton type="white" />
        </div>
      </div>
    </div>
  );
};

export default ConnectWallet;
