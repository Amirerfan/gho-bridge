import { ConnectKitButton } from 'connectkit';

export const ConnectButton = ({ type }: { type?: 'primary' | 'white' }) => {
  return (
    <ConnectKitButton.Custom>
      {({ isConnected, show, truncatedAddress, ensName }) => {
        return (
          <button
            onClick={show}
            className={`cursor-pointer relative inline-block px-6 py-2.5 text-white bg-gradient-to-r from-primary-light-3 to-primary font-medium rounded-3xl drop-shadow-lg ${
              type === 'white'
                ? '!from-white !to-gray-300 !font-bold !text-primary'
                : ''
            }`}
          >
            {isConnected ? ensName ?? truncatedAddress : 'Connect Wallet'}
          </button>
        );
      }}
    </ConnectKitButton.Custom>
  );
};
