import { SupportedCoin } from '../types/coins';
import { useEffect, useState } from 'react';

const useMergeCollateralData = ({
  supportedCoins,
  aaveUiPoolDataProviderSepolia,
  aaveUiPoolDataProviderMumbai,
}: {
  supportedCoins: SupportedCoin[];
  aaveUiPoolDataProviderSepolia: any;
  aaveUiPoolDataProviderMumbai: any;
}) => {
  const [collateralData, setCollateralData] =
    useState<SupportedCoin[]>(supportedCoins);

  useEffect(() => {}, [
    supportedCoins,
    aaveUiPoolDataProviderSepolia,
    aaveUiPoolDataProviderMumbai,
  ]);

  return {
    collateralData,
  };
};

export default useMergeCollateralData;
