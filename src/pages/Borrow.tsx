import InputAmount from '../components/InputAmount';
import OutputAmount from '../components/OutputAmount';
import { usePoolContext } from '../contexts/PoolContext';

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
        <div className="flex justify-between w-full mb-3 gap-3">
          <InputAmount />
          <InputAmount />
        </div>
        <img
          className="mx-auto mb-3"
          src="/assets/images/merge-icon.svg"
          alt=""
        />
        <div className="flex items-center justify-center">
          <OutputAmount />
        </div>
      </section>
    </div>
  );
};

export default Borrow;
