import { ConnectButton } from '../ConnectButton';
import ChainsDropdown from '../ChainsDropdown';

export const Navbar = () => {
  return (
    <nav className="h-16 w-full bg-transparent flex items-center justify-between px-6">
      <ChainsDropdown />
      <ConnectButton />
    </nav>
  );
};
