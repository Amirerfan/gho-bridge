const OutputAmount = ({}) => {
  return (
    <div className="relative rounded-xl bg-primary p-5 flex w-full items-center">
      <div className="input-left flex flex-col gap-1">
        <label htmlFor="amount" className="text-white text-sm font-medium">
          From Etheruem
        </label>
        <input
          type="number"
          id="amount"
          value={'fromInput'}
          onChange={(e) => {}}
          className="text-3xl bg-transparent text-white pl-0 w-[50%]"
          placeholder="0.0"
        />
        <p className="text-secondary text-sm font-medium mt-1">
          $1.00
          {/*${ghoUsdPrice !== undefined && ghoUsdPrice.dsp.toFixed(2)}*/}
          {/*{fromInput && ghoUsdPrice*/}
          {/*  ? ' x ' +*/}
          {/*    fromInput +*/}
          {/*    ' ≈ $' +*/}
          {/*    (ghoUsdPrice.dsp * Number(fromInput)).toFixed(2)*/}
          {/*  : ' (1 GHO)'}*/}
        </p>
      </div>
      <div className="flex flex-col gap-2 rounded-xl w-[50%] py-0.5 justify-start h-full items-end">
        <div className="flex gap-2 items-center justify-center">
          {/*{ghoBalance !== undefined && (*/}
          {/*  <>*/}
          {/*    <p className="text-gray-300 text-sm">{ghoBalance.dsp}</p>*/}
          {/*    <p*/}
          {/*      className="cursor-pointer text-sm hover:text-white text-gray-300 pr-1 font-semibold transition-all"*/}
          {/*      onClick={() => setFromInput(ghoBalance?.hStr)}*/}
          {/*    >*/}
          {/*      MAX*/}
          {/*    </p>*/}
          {/*  </>*/}
          {/*)}*/}
          1.00 MAX
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
  );
};

export default OutputAmount;
