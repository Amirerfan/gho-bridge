import { ConnectButton } from '../ConnectButton';
import ChainsDropdown from '../ChainsDropdown';
import { useMockGHOContext } from '../../contexts/MockGHOContext';

export const Navbar = () => {
  const { mockGHOSepoliaBalance, mockGHOMumbaiBalance } = useMockGHOContext();
  console.log(mockGHOSepoliaBalance, mockGHOMumbaiBalance);
  return (
    <nav className="h-16 w-full bg-transparent flex items-center justify-between px-6">
      <div className="ml-9 flex items-center">
        <img src="/assets/images/logo.png" className="w-20" alt="" />
        <ChainsDropdown />
      </div>
      <div className="flex gap-2 items-center">
        {mockGHOSepoliaBalance && (
          <div className="flex gap-1 items-center bg-gradient-to-r from-primary-light-3 to-primary py-2 px-3 text-white rounded-3xl">
            <img
              className="w-4 h-4"
              src="https://app.aave.com/icons/tokens/gho.svg"
              alt=""
            />
            <img
              className="w-4 h-4 mr-2"
              src="https://imagedelivery.net/XQ6LDks1pWNDtTDAw7o9nA/70fb0697-72bf-4232-ed91-1c088911c800/public"
              alt=""
            />
            <p className="font-semibold text-lg">
              {mockGHOSepoliaBalance?.dsp.toFixed(2)}
            </p>
          </div>
        )}
        {mockGHOMumbaiBalance && (
          <div className="flex gap-1 items-center bg-gradient-to-r from-primary-light-3 to-primary py-2 px-3 text-white rounded-3xl mr-6">
            <img
              className="w-4 h-4"
              src="https://app.aave.com/icons/tokens/gho.svg"
              alt=""
            />
            <img
              className="w-4 h-4 mr-3 ml-0.5"
              src="https://imagedelivery.net/XQ6LDks1pWNDtTDAw7o9nA/1f9a04e7-bf43-476d-4705-506297e2de00/public"
              alt=""
            />
            <p className="font-semibold text-lg">
              {mockGHOMumbaiBalance?.dsp.toFixed(2)}
            </p>
          </div>
        )}

        <ConnectButton />
      </div>
    </nav>
  );
};
