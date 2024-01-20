import InputAmount from '../components/InputAmount';
import OutputAmount from '../components/OutputAmount';
import { usePoolContext } from '../contexts/PoolContext';
import { w3bNumberFromBigint } from '../utils/web3';

const Borrow = () => {
  const { poolDataSepolia, poolDataMumbai } = usePoolContext();

  console.log(poolDataSepolia, poolDataMumbai);

  return (
    <div className="borrow-page gap-1 flex flex-col">
      <div className="borrow-header mb-12">
        <p className="text-white text-2xl font-bold flex gap-1 items-center">
          Borrow
          <img
            className="w-7 ml-2 mt-0.5"
            src="https://app.aave.com/icons/tokens/gho.svg"
            alt=""
          />
          GHO
        </p>
      </div>

      <section className="card">
        <div className="flex justify-between w-full mb-7 gap-5">
          {poolDataSepolia && poolDataMumbai && (
            <>
              <InputAmount
                max={w3bNumberFromBigint(poolDataSepolia[2], 8)}
                title="Sepolia"
                icon="https://imagedelivery.net/XQ6LDks1pWNDtTDAw7o9nA/70fb0697-72bf-4232-ed91-1c088911c800/public"
              />
              <InputAmount
                max={w3bNumberFromBigint(poolDataMumbai[2], 8)}
                title="Mumbai"
                icon="https://imagedelivery.net/XQ6LDks1pWNDtTDAw7o9nA/1f9a04e7-bf43-476d-4705-506297e2de00/public"
              />
            </>
          )}
        </div>
        <img
          className="mx-auto mb-7"
          src="/assets/images/merge-icon.svg"
          alt=""
        />
        <div className="flex items-center justify-center mb-8">
          <OutputAmount />
        </div>

        <div className="w-full flex justify-end">
          <button className="btn btn--large flex gap-1">
            Borrow
            <img
              className="w-6 ml-2 mt-0.5"
              src="https://app.aave.com/icons/tokens/gho.svg"
              alt=""
            />
            GHO
          </button>
        </div>
      </section>
    </div>
  );
};

export default Borrow;
