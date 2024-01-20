import axios from 'axios';

export const getUSDPricesAPI = async () => {
  const response = await axios.get(
    'https://api.coingecko.com/api/v3/simple/price?ids=aave-dai%2Caave-link%2Caave-usdc%2Caave-weth%2Caave-wbtc%2Cgho%2Caave-usdt%2Caave%2Cwmatic%2Caave-crv&vs_currencies=usd',
  );
  return response.data;
};
