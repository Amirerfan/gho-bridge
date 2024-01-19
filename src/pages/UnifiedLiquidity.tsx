import CollateralTable from '../components/CollateralTable';

const UnifiedLiquidity = () => {
  return (
    <div className="unified-collateral-page gap-1 flex flex-col">
      <p className="text-white text-2xl font-bold">Your AAVE Collaterals</p>

      <div className="table-header flex w-full justify-between items-center">
        <label className="relative inline-flex items-center cursor-pointer">
          <input type="checkbox" value="" className="sr-only peer" />
          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
          <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
            Show assets with 0 balance
          </span>
        </label>
        <button className="btn btn--primary btn--medium">Borrow GHO</button>
      </div>

      <CollateralTable
        data={[]}
        loading={false}
        error={false}
        onRowClick={false}
      />
    </div>
  );
};

export default UnifiedLiquidity;
