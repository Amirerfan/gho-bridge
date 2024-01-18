import { useGHOContext } from '../contexts/GHOContext';
import { useState } from 'react';
import useSnowContract from '../hooks/useSnowContract';
import { w3bNumberFromBigint, w3bNumberFromString } from '../utils/web3';

export const Home = () => {
  const { ghoBalance, ghoUsdPrice } = useGHOContext();
  const [fromInput, setFromInput] = useState('');
  const [toInput, setToInput] = useState('');

  const { approveAndFrost } = useSnowContract();

  return (
    <div className="flex-1 flex items-center justify-center flex-col gap-5">
      <h1 className="text-4xl font-bold text-white">GHO Bridge</h1>
      <p className="text-secondary text-xl font-semibold mb-5">
        Bridge your GHO tokens from Ethereum to polygon network.
      </p>
      <section className="p-2 pt-3 flex flex-col gap-1 rounded-2xl w-[460px] max-w-[90vw] bg-black border border-gray-500 border-opacity-30">
        <div className="section-header flex items-center justify-start gap-3 px-1 mb-2">
          <p className="text-white cursor-pointer font-semibold">Bridge</p>
          <p className="text-gray-400 cursor-pointer font-semibold">Delegate</p>
        </div>

        <div className="relative rounded-xl bg-black-500 p-5 flex w-full items-center">
          <div className="input-left flex flex-col gap-1">
            <label htmlFor="amount" className="text-white text-sm font-medium">
              From Etheruem
            </label>
            <input
              type="number"
              id="amount"
              value={fromInput}
              onChange={(e) => setFromInput(e.target.value)}
              className="text-3xl bg-transparent text-white pl-0 w-[50%]"
              placeholder="0.0"
            />
            <p className="text-secondary text-sm font-medium mt-1">
              ${ghoUsdPrice !== undefined && ghoUsdPrice.dsp.toFixed(2)}
              {fromInput && ghoUsdPrice
                ? ' x ' +
                  fromInput +
                  ' ≈ $' +
                  (ghoUsdPrice.dsp * Number(fromInput)).toFixed(2)
                : ' (1 GHO)'}
            </p>
          </div>
          <div className="flex flex-col gap-2 rounded-xl w-[50%] py-0.5 justify-start h-full items-end">
            <div className="flex gap-2 items-center justify-center">
              {ghoBalance !== undefined && (
                <>
                  <p className="text-gray-300 text-sm">{ghoBalance.dsp}</p>
                  <p
                    className="cursor-pointer text-sm hover:text-white text-gray-300 pr-1 font-semibold transition-all"
                    onClick={() => setFromInput(ghoBalance?.hStr)}
                  >
                    MAX
                  </p>
                </>
              )}
            </div>
            <div className="flex gap-1 items-center bg-primary-light px-2 py-1 rounded-xl">
              <img
                src="https://s2.coinmarketcap.com/static/img/coins/64x64/23508.png"
                alt="GHO"
                className="w-7 h-7 rounded-full"
              />
              <p className="text-white text-md font-medium">GHO</p>
            </div>
          </div>
          <span className="absolute cursor-pointer rounded-xl bg-black-600 border-2 border-secondary border-opacity-10 p-2 top-full left-1/2 -translate-x-1/2 -translate-y-[40%]">
            <img src="/assets/images/arrow-down.svg" alt="" />
          </span>
        </div>

        <div className="rounded-xl bg-black-500 p-5 flex w-full items-center">
          <div className="input-left flex flex-col gap-1">
            <label htmlFor="amount" className="text-white text-sm font-medium">
              To Polygon
            </label>
            <input
              type="number"
              id="amount"
              value={toInput}
              onChange={(e) => setToInput(e.target.value)}
              className="text-3xl bg-transparent text-white pl-0 w-[50%]"
              placeholder="0.0"
            />
            <p className="text-secondary text-sm font-medium mt-1">$3.80</p>
          </div>
          <div className="flex flex-col gap-2 rounded-xl w-[50%] py-0.5 justify-start h-full items-end">
            <div className="flex gap-2 items-center justify-center">
              {ghoBalance && (
                <>
                  <p className="text-gray-300 text-sm pr-1">{ghoBalance.dsp}</p>
                  {/*<p className="cursor-pointer text-sm hover:text-white text-gray-300 font-semibold transition-all"></p>*/}
                </>
              )}
            </div>
            <div className="flex gap-1 items-center bg-primary-light px-2 py-1 rounded-xl">
              <img
                src="https://s2.coinmarketcap.com/static/img/coins/64x64/23508.png"
                alt="GHO"
                className="w-7 h-7 rounded-full"
              />
              <p className="text-white text-md font-medium">GHO</p>
            </div>
          </div>
        </div>

        <button
          className="text-gray-300 text-xl font-medium bg-primary w-full py-3 rounded-xl hover:bg-primary-light transition-all hover:text-white mt-3"
          onClick={() => approveAndFrost(w3bNumberFromString(fromInput))}
        >
          Approve and Send
        </button>
      </section>
    </div>
  );
};
