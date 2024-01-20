import { SupportedCoin } from '../types/coins';
import { useCallback, useEffect, useState } from 'react';
import { TableData } from '../types/tableData';
import { SupportedChainId } from '../constants/chains';
import { w3bNumberFromBigint } from '../utils/web3';

const useMergeCollateralData = ({
  supportedCoins,
  aaveUiPoolDataProviderSepolia,
  aaveUiPoolDataProviderMumbai,
  usdPrices,
}: {
  supportedCoins: SupportedCoin[];
  aaveUiPoolDataProviderSepolia: any;
  aaveUiPoolDataProviderMumbai: any;
  usdPrices: any;
}) => {
  const [tableData, setTableData] = useState<TableData[]>([]);

  const getChainCoinCollateralData = useCallback(
    (
      chainId: SupportedChainId,
      address: string,
      aaveUiPoolDataProviderSepolia: any,
      aaveUiPoolDataProviderMumbai: any,
    ) => {
      if (chainId === SupportedChainId.SEPOLIA) {
        if (!aaveUiPoolDataProviderSepolia)
          return {
            collateral: null,
            canBeCollateral: null,
          };
        const relatedCollateral = aaveUiPoolDataProviderSepolia[0].find(
          (cn: any) => cn.underlyingAsset === address,
        );
        if (relatedCollateral)
          return {
            collateral: w3bNumberFromBigint(
              relatedCollateral.scaledATokenBalance,
            ),
            canBeCollateral: relatedCollateral.usageAsCollateralEnabledOnUser,
          };
      } else if (chainId === SupportedChainId.MUMBAI) {
        if (!aaveUiPoolDataProviderMumbai)
          return {
            collateral: null,
            canBeCollateral: null,
          };
        const relatedCollateral = aaveUiPoolDataProviderMumbai[0].find(
          (cn: any) => cn.underlyingAsset === address,
        );
        if (relatedCollateral)
          return {
            collateral: w3bNumberFromBigint(
              relatedCollateral.scaledATokenBalance,
            ),
            canBeCollateral: relatedCollateral.usageAsCollateralEnabledOnUser,
          };
      }
      return {
        collateral: null,
        canBeCollateral: null,
      };
    },
    [],
  );

  useEffect(() => {
    const tbldt: TableData[] = [];
    console.log('usdPrices ddd', usdPrices);
    supportedCoins.forEach((coin) => {
      const coinData: TableData = {
        id: coin.id,
        symbol: coin.symbol,
        icon: coin.icon,
        chainlinkPriceFeedAddress: coin.chainlinkPriceFeedAddress,
        usdPrice:
          usdPrices && usdPrices[coin.coinGeckoId]
            ? usdPrices[coin.coinGeckoId].usd
            : null,
        chainData: coin.chainAddress.map((chain) => {
          return {
            chainId: chain.chainId,
            address: chain.address,
            ...getChainCoinCollateralData(
              chain.chainId,
              chain.address,
              aaveUiPoolDataProviderSepolia,
              aaveUiPoolDataProviderMumbai,
            ),
          };
        }),
      };
      tbldt.push(coinData);
    });

    setTableData(tbldt);
  }, [
    supportedCoins,
    aaveUiPoolDataProviderSepolia,
    aaveUiPoolDataProviderMumbai,
    usdPrices,
  ]);

  return {
    tableData,
  };
};

export default useMergeCollateralData;
