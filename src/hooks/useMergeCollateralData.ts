import { SupportedCoin } from '../types/coins';
import { useCallback, useEffect, useState } from 'react';
import { TableData } from '../types/tableData';
import { SupportedChainId } from '../constants/chains';
import { w3bNumberFromBigint } from '../utils/web3';

const useMergeCollateralData = ({
  supportedCoins,
  aaveUiPoolDataProviderSepolia,
  aaveUiPoolDataProviderMumbai,
}: {
  supportedCoins: SupportedCoin[];
  aaveUiPoolDataProviderSepolia: any;
  aaveUiPoolDataProviderMumbai: any;
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

    supportedCoins.forEach((coin) => {
      const coinData: TableData = {
        id: coin.id,
        symbol: coin.symbol,
        icon: coin.icon,
        chainlinkPriceFeedAddress: coin.chainlinkPriceFeedAddress,
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
            usdPrice: null,
          };
        }),
      };
      tbldt.push(coinData);
    });

    console.log(tbldt);

    setTableData(tbldt);
  }, [
    supportedCoins,
    aaveUiPoolDataProviderSepolia,
    aaveUiPoolDataProviderMumbai,
  ]);

  return {
    tableData,
  };
};

export default useMergeCollateralData;
