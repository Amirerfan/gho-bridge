import { SupportedChainId } from '../../constants/chains';

const OutputAmount = ({
  value,
  selectedChain,
  setSelectedChain,
}: {
  value: string;
  selectedChain: SupportedChainId;
  setSelectedChain: (chain: SupportedChainId) => void;
}) => {
  return (
    <div className="relative rounded-xl bg-gradient-to-r from-primary-light to-gray-800 p-5 flex w-full items-center">
      <div className="input-left w-full flex flex-col gap-1">
        <div className="flex w-full items-start justify-between">
          <label htmlFor="amount" className="text-white text-sm font-medium">
            You will receive (estimated)
          </label>
          <div className="flex gap-2 items-start text-sm font-medium justify-center text-white">
            Destination chain
          </div>
        </div>
        <div className="w-full flex justify-between items-center">
          <input
            id="amount"
            value={value}
            disabled
            className="text-3xl bg-transparent text-white pl-0"
            placeholder="$0.00"
          />
          <div className="flex flex-col gap-2 rounded-xl py-0.5 justify-start items-end">
            <select
              id="countries"
              className="bg-primary-light text-white font-semibold text-sm rounded-xl pr-1 focus:ring-0 focus:border-none block w-full p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-0 dark:focus:border-none"
              onChange={(e) => {
                setSelectedChain(Number(e.target.value) as SupportedChainId);
              }}
            >
              <option
                className="flex gap-1 font-semibold"
                value={SupportedChainId.SEPOLIA}
                selected={selectedChain === SupportedChainId.SEPOLIA}
                onClick={() => setSelectedChain(SupportedChainId.SEPOLIA)}
              >
                <img
                  src="https://imagedelivery.net/XQ6LDks1pWNDtTDAw7o9nA/70fb0697-72bf-4232-ed91-1c088911c800/public"
                  alt=""
                  className="w-5"
                />
                SEPOLIA
              </option>
              <option
                className="flex gap-1 font-semibold"
                value={SupportedChainId.MUMBAI}
                selected={selectedChain === SupportedChainId.MUMBAI}
                onClick={() => setSelectedChain(SupportedChainId.MUMBAI)}
              >
                <img
                  src="https://imagedelivery.net/XQ6LDks1pWNDtTDAw7o9nA/1f9a04e7-bf43-476d-4705-506297e2de00/public"
                  alt=""
                  className="w-5 h-5"
                />
                MUMBAI
              </option>
            </select>
            {/*<div className="flex gap-1 items-center bg-primary-light px-2 py-1 rounded-xl">*/}
            {/*  <img*/}
            {/*    src="https://s2.coinmarketcap.com/static/img/coins/64x64/23508.png"*/}
            {/*    alt="GHO"*/}
            {/*    className="w-7 h-7 rounded-full"*/}
            {/*  />*/}
            {/*  <p className="text-white text-md font-medium">GHO</p>*/}
            {/*</div>*/}
          </div>
        </div>
        {/*<p className="text-secondary text-sm font-medium mt-1">*/}
        {/*  $1.00*/}
        {/*  /!*${ghoUsdPrice !== undefined && ghoUsdPrice.dsp.toFixed(2)}*!/*/}
        {/*  /!*{fromInput && ghoUsdPrice*!/*/}
        {/*  /!*  ? ' x ' +*!/*/}
        {/*  /!*    fromInput +*!/*/}
        {/*  /!*    ' ≈ $' +*!/*/}
        {/*  /!*    (ghoUsdPrice.dsp * Number(fromInput)).toFixed(2)*!/*/}
        {/*  /!*  : ' (1 GHO)'}*!/*/}
        {/*</p>*/}
      </div>
    </div>
  );
};

export default OutputAmount;
