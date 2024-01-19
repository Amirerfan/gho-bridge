const CollateralTable = ({
  data,
  loading,
  error,
  onRowClick,
}: {
  data: any;
  loading: boolean;
  error: any;
  onRowClick: any;
}) => {
  console.log(data);
  console.log(loading);
  console.log(error);
  console.log(onRowClick);
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-200 uppercase bg-primary dark:bg-primary dark:text-gray-200">
          <tr>
            <th rowSpan={2} scope="col" className="px-6 py-3">
              Symbol
            </th>
            <th colSpan={2} scope="col" className="px-6 py-3 text-center">
              Chain
            </th>
            <th rowSpan={2} scope="col" className="px-6 py-3">
              can be collateral
            </th>
            <th rowSpan={2} scope="col" className="px-6 py-3">
              total
            </th>
          </tr>
          <tr>
            <th
              scope="col"
              className="px-6 py-3 gap-1.5 flex items-center text-center"
            >
              <img
                src="https://imagedelivery.net/XQ6LDks1pWNDtTDAw7o9nA/70fb0697-72bf-4232-ed91-1c088911c800/public"
                alt=""
                className="w-6"
              />
              <p>Sepolia</p>
            </th>
            <th scope="col" className="px-6 py-3 text-center">
              <img
                src="https://imagedelivery.net/XQ6LDks1pWNDtTDAw7o9nA/1f9a04e7-bf43-476d-4705-506297e2de00/public"
                alt=""
                className="w-5 inline mr-2"
              />
              Mumbai
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th
              scope="row"
              className="px-6 py-4 flex gap-1 items-center font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              <img
                src="https://imagedelivery.net/XQ6LDks1pWNDtTDAw7o9nA/d6bc0032-812a-4289-ff2b-6cdb93482f00/public"
                alt=""
                className="w-6"
              />
              BTC
            </th>
            <td className="px-6 py-4">Silver</td>
            <td className="px-6 py-4">Laptop</td>
            <td className="px-6 py-4">
              <div className="flex items-center">
                <div className="h-2.5 w-2.5 rounded-full bg-red-500 me-2"></div>
                No
              </div>
            </td>
            <td className="px-6 py-4">
              <a
                href="#"
                className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
              >
                Edit
              </a>
            </td>
          </tr>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th
              scope="row"
              className="px-6 py-4 font-medium flex gap-1 items-center text-gray-900 whitespace-nowrap dark:text-white"
            >
              <img
                src="https://app.aave.com/icons/tokens/eth.svg"
                alt=""
                className="w-6"
              />
              ETH
            </th>
            <td className="px-6 py-4">White</td>
            <td className="px-6 py-4">Laptop PC</td>
            <td className="px-6 py-4">
              <div className="flex items-center">
                <div className="h-2.5 w-2.5 rounded-full bg-green-500 me-2"></div>
                Yes
              </div>
            </td>
            <td className="px-6 py-4">
              <a
                href="#"
                className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
              >
                Edit
              </a>
            </td>
          </tr>
          <tr className="bg-white border-b dark:bg-primary dark:border-gray-700">
            <th
              scope="row"
              className="px-6 py-4 font-medium flex gap-1 items-center text-gray-900 whitespace-nowrap dark:text-white"
            >
              TOTAL
            </th>
            <td className="px-6 py-4">White</td>
            <td className="px-6 py-4">Laptop PC</td>
            <td className="px-6 py-4"></td>
            <td className="px-6 py-4">
              <a
                href="#"
                className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
              >
                Edit
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CollateralTable;
