const GroupButton = ({
  options,
  selectedOption,
  optionClickHandler,
}: {
  options: string[];
  selectedOption: string;
  optionClickHandler: (option: string) => void;
}) => {
  return (
    <div className="switch flex items-center border-2 border-primary bg-primary rounded-lg w-full sm:w-auto">
      <div
        className={`switch__option text-white w-full sm:w-[72px] px-1 py-3 text-center text-xs cursor-pointer rounded-l-md ${
          selectedOption === options[0]
            ? `text-white bg-primary-light`
            : `text-gray80`
        }`}
        data-testid="chains-filter-chain-type-all"
        onClick={() => {
          optionClickHandler(options[0]);
        }}
      >
        ALL
      </div>
      <div
        className={`switch__option text-white w-full sm:w-[72px] px-1 py-3 text-center text-xs cursor-pointer ${
          selectedOption === options[1]
            ? `text-white bg-primary-light`
            : `text-gray80`
        }`}
        data-testid="chains-filter-chain-type-evm"
        onClick={() => {
          optionClickHandler(options[1]);
        }}
      >
        EVM
      </div>
      <div
        className={`switch__option text-white w-full sm:w-[72px] px-1 py-3 text-center text-xs cursor-pointer rounded-r-md ${
          selectedOption === options[2]
            ? `text-white bg-primary-light`
            : `text-gray80`
        }`}
        onClick={() => {
          optionClickHandler(options[2]);
        }}
        data-testid="chains-filter-chain-type-non-evm"
      >
        nonEVM
      </div>
    </div>
  );
};

export default GroupButton;
