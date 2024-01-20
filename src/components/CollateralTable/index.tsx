import { TableData } from '../../types/tableData';
import { SupportedChainId } from '../../constants/chains';
import { formatNumber } from '../../utils/ui/priceFormater';

const CollateralTable = ({
  data,
  loading,
  error,
  onRowClick,
}: {
  data: TableData[];
  loading: boolean;
  error: any;
  onRowClick: any;
}) => {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-xl mb-10">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-200 uppercase bg-gradient-to-r from-primary-light-2 to-primary dark:bg-primary dark:text-gray-200">
          <tr>
            <th rowSpan={2} scope="col" className="px-6 py-3">
              Symbol
            </th>
            <th rowSpan={2} scope="col" className="px-6 py-3">
              Price
            </th>
            <th colSpan={2} scope="col" className="px-6 py-3 text-center">
              Chain
            </th>
            <th colSpan={2} scope="col" className="px-6 py-3 text-center">
              can be collateral
            </th>
            <th rowSpan={2} scope="col" className="px-6 py-3 text-center">
              total collateral
            </th>
          </tr>
          <tr>
            <th scope="col" className="px-6 py-3 gap-1.5 flex items-center">
              <img
                src="https://imagedelivery.net/XQ6LDks1pWNDtTDAw7o9nA/70fb0697-72bf-4232-ed91-1c088911c800/public"
                alt=""
                className="w-6"
              />
              <p>Sepolia</p>
            </th>
            <th scope="col" className="px-6 py-3">
              <img
                src="https://imagedelivery.net/XQ6LDks1pWNDtTDAw7o9nA/1f9a04e7-bf43-476d-4705-506297e2de00/public"
                alt=""
                className="w-5 inline mr-2"
              />
              Mumbai
            </th>
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
          {data.map((coin) => (
            <tr
              key={coin.id}
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
            >
              <th
                scope="row"
                className="px-6 py-2 font-medium text-white whitespace-nowrap dark:text-white"
              >
                <div className="flex gap-2 items-center">
                  <img src={coin.icon} alt="" className="w-6" />
                  <p className="">{coin.symbol}</p>
                </div>
              </th>
              <td className="px-6 py-2 text-white">
                ≈ ${Number(coin.usdPrice).toFixed(2) || '0.00'}
              </td>
              <td className="px-6 py-2 text-white">
                <div className="flex flex-col gap-1">
                  {coin.chainData.find(
                    (chain) => chain.chainId === SupportedChainId.SEPOLIA,
                  )?.collateral?.dsp || '0.00'}
                  <span>
                    ≈ $
                    {coin.chainData.find(
                      (chain) => chain.chainId === SupportedChainId.SEPOLIA,
                    )?.collateral?.dsp && coin.usdPrice
                      ? Number(
                          coin.chainData.find(
                            (chain) =>
                              chain.chainId === SupportedChainId.SEPOLIA,
                          )?.collateral?.dsp! * Number(coin.usdPrice),
                        ).toFixed(2)
                      : '0.00'}
                  </span>
                </div>
              </td>
              <td className="px-6 py-2 text-white">
                <div className="flex flex-col gap-1">
                  {coin.chainData.find(
                    (chain) => chain.chainId === SupportedChainId.MUMBAI,
                  )?.collateral?.dsp || '0.00'}
                  <span>
                    ≈ $
                    {coin.chainData.find(
                      (chain) => chain.chainId === SupportedChainId.MUMBAI,
                    )?.collateral?.dsp && coin.usdPrice
                      ? Number(
                          coin.chainData.find(
                            (chain) =>
                              chain.chainId === SupportedChainId.MUMBAI,
                          )?.collateral?.dsp! * Number(coin.usdPrice),
                        ).toFixed(2)
                      : '0.00'}
                  </span>
                </div>
              </td>
              <td className="px-6 py-2">
                <div className="flex items-center justify-center">
                  <div
                    className={`h-2.5 w-2.5 rounded-full ${
                      coin.chainData.find(
                        (chain) => chain.chainId === SupportedChainId.SEPOLIA,
                      )?.canBeCollateral
                        ? 'bg-green-500'
                        : 'bg-red-500'
                    } me-2`}
                  ></div>
                  {coin.chainData.find(
                    (chain) => chain.chainId === SupportedChainId.SEPOLIA,
                  )?.canBeCollateral
                    ? 'Yes'
                    : 'No'}
                </div>
              </td>
              <td className="px-6 py-2">
                <div className="flex items-center justify-center">
                  <div
                    className={`h-2.5 w-2.5 rounded-full ${
                      coin.chainData.find(
                        (chain) => chain.chainId === SupportedChainId.MUMBAI,
                      )?.canBeCollateral
                        ? 'bg-green-500'
                        : 'bg-red-500'
                    } me-2`}
                  ></div>
                  {coin.chainData.find(
                    (chain) => chain.chainId === SupportedChainId.MUMBAI,
                  )?.canBeCollateral
                    ? 'Yes'
                    : 'No'}
                </div>
              </td>
              <td className="px-6 py-2 text-white font-semibold">
                <div className="flex flex-col gap-1">
                  <div className="flex items-center">
                    {coin.chainData.reduce(
                      (acc, chain) => acc + Number(chain.collateral?.dsp || 0),
                      0,
                    )}{' '}
                    {coin.symbol}
                  </div>
                  <div>
                    ≈ $
                    {coin.usdPrice &&
                      Number(
                        coin.chainData.reduce(
                          (acc, chain) =>
                            acc + Number(chain.collateral?.dsp || 0),
                          0,
                        ) * Number(coin.usdPrice),
                      ).toFixed(2)}
                  </div>
                </div>
              </td>
            </tr>
          ))}
          <tr className="bg-white border-b dark:bg-gradient-to-r dark:from-primary-light-2 dark:to-primary dark:border-gray-700">
            <th
              scope="row"
              className="px-6 py-4 font-medium flex gap-1 items-center text-gray-900 whitespace-nowrap dark:text-white"
            >
              TOTAL
            </th>
            <td className="px-6 py-4 text-white"></td>
            <td className="px-6 py-4 text-white font-semibold">
              ≈ $
              {Number(
                data.reduce(
                  (acc, coin) =>
                    acc +
                    Number(
                      coin.chainData.find(
                        (chain) => chain.chainId === SupportedChainId.SEPOLIA,
                      )?.collateral?.dsp
                        ? coin.chainData.find(
                            (chain) =>
                              chain.chainId === SupportedChainId.SEPOLIA,
                          )?.collateral?.dsp! * Number(coin.usdPrice)
                        : 0,
                    ),
                  0,
                ),
              ).toFixed(2)}
            </td>
            <td className="px-6 py-4 text-white font-semibold">
              ≈ $
              {Number(
                data.reduce(
                  (acc, coin) =>
                    acc +
                    Number(
                      coin.chainData.find(
                        (chain) => chain.chainId === SupportedChainId.MUMBAI,
                      )?.collateral?.dsp
                        ? coin.chainData.find(
                            (chain) =>
                              chain.chainId === SupportedChainId.MUMBAI,
                          )?.collateral?.dsp! * Number(coin.usdPrice)
                        : 0,
                    ),
                  0,
                ),
              ).toFixed(2)}
            </td>
            <td className="px-6 py-4 text-white font-semibold"></td>
            <td className="px-6 py-4 text-white font-semibold"></td>
            <td className="px-6 py-4 text-white font-semibold">
              ≈ $
              {Number(
                data.reduce(
                  (acc, coin) =>
                    acc +
                    Number(
                      coin.chainData.reduce(
                        (acc, chain) =>
                          acc +
                          Number(
                            chain.collateral?.dsp
                              ? chain.collateral?.dsp * Number(coin.usdPrice)
                              : 0,
                          ),
                        0,
                      ),
                    ),
                  0,
                ),
              ).toFixed(2)}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CollateralTable;
