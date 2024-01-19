const InputAmount = ({}) => {
  return (
    <div className="relative rounded-xl bg-primary p-5 flex w-full items-center">
      <div className="input-left w-full flex flex-col gap-1">
        <div className="flex w-full justify-between">
          <label htmlFor="amount" className="text-white text-sm font-medium">
            From Etheruem
          </label>
          <div className="flex gap-2 items-center justify-center text-white">
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
