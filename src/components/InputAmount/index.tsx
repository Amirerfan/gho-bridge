import { W3bNumber } from '../../types/web3';

const InputAmount = ({
  max,
  title,
  icon,
}: {
  max: W3bNumber;
  title: string;
  icon: string;
}) => {
  return (
    <div className="relative rounded-xl bg-gradient-to-r from-primary-light to-gray-800 p-5 flex w-full items-center">
      <div className="input-left w-full flex flex-col gap-1">
        <div className="flex w-full justify-between">
          <label
            htmlFor="amount"
            className="text-white text-sm font-medium flex gap-1.5 items-center"
          >
            <img src={icon} alt="" className="w-5" />
            {title} collateral
          </label>
          <div className="flex gap-2 items-center justify-center text-white">
            {max !== undefined && (
              <>
                <p className="text-gray-300 text-sm">
                  Available: ${max.dsp.toFixed(2)}
                </p>
                <p
                  className="cursor-pointer text-sm hover:text-white text-gray-300 pr-1 font-semibold transition-all"
                  // onClick={() => setFromInput(max?.hStr)}
                >
                  MAX
                </p>
              </>
            )}
          </div>
        </div>
        <input
          type="number"
          id="amount"
          value={'fromInput'}
          onChange={(e) => {}}
          className="text-3xl bg-transparent text-white pl-0"
          placeholder="0.0"
        />
      </div>
    </div>
  );
};

export default InputAmount;
