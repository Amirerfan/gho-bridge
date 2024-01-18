import { useRef, useState } from 'react';
import Dropdown from './dropdown';
import { FadeIn } from '../../animations';
import { useOutsideClicked } from '../../utils/dom/useOutsideClicked';

const ChainsDropdown = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const divRef = useRef<HTMLDivElement>(null);

  useOutsideClicked(divRef, () => setIsDropdownOpen(false));

  return (
    <div ref={divRef} className="chains-button relative ml-9">
      <p
        className="button-text text-primary bg-secondary px-6 py-2.5 rounded-2xl cursor-pointer drop-shadow-lg font-medium"
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
      >
        Chains
      </p>

      {isDropdownOpen && <Dropdown />}
    </div>
  );
};

export default ChainsDropdown;
