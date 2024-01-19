import { SupportedChainId } from './chains';

export const SupportedCoins = [
  {
    id: 1,
    icon: 'https://app.aave.com/icons/tokens/dai.svg',
    symbol: 'DAI',
    chainAddress: [
      {
        chainId: SupportedChainId.SEPOLIA,
        address: '0xFF34B3d4Aee8ddCd6F9AFFFB6Fe49bD371b8a357',
      },
      {
        chainId: SupportedChainId.MUMBAI,
        address: '0xc8c0Cf9436F4862a8F60Ce680Ca5a9f0f99b5ded',
      },
    ],
    chainlinkPriceFeedAddress: '0xaed0c38402a5d19df6e4c03f4e2dced6e29c1ee9',
  },
  {
    id: 2,
    icon: 'https://app.aave.com/icons/tokens/link.svg',
    symbol: 'LINK',
    chainAddress: [
      {
        chainId: SupportedChainId.SEPOLIA,
        address: '0xf8Fb3713D459D7C1018BD0A49D19b4C44290EBE5',
      },
      {
        chainId: SupportedChainId.MUMBAI,
        address: '0x9DFf9E93B1e513379cf820504D642c6891d8F7CC',
      },
    ],
    chainlinkPriceFeedAddress: '0x2c1d072e956affc0d435cb7ac38ef18d24d9127c',
  },
  {
    id: 3,
    icon: 'https://app.aave.com/icons/tokens/usdc.svg',
    symbol: 'USDC',
    chainAddress: [
      {
        chainId: SupportedChainId.SEPOLIA,
        address: '0x94a9D9AC8a22534E3FaCa9F4e7F2E2cf85d5E4C8',
      },
      {
        chainId: SupportedChainId.MUMBAI,
        address: '0x52D800ca262522580CeBAD275395ca6e7598C014',
      },
    ],
    chainlinkPriceFeedAddress: '0xdeb288F737066589598e9214E782fa5A8eD689e8',
  },
  {
    id: 4,
    icon: 'https://app.aave.com/icons/tokens/wbtc.svg',
    symbol: 'WBTC',
    chainAddress: [
      {
        chainId: SupportedChainId.SEPOLIA,
        address: '0x29f2D40B0605204364af54EC677bD022dA425d03',
      },
      {
        chainId: SupportedChainId.MUMBAI,
        address: '0x2Fa2e7a6dEB7bb51B625336DBe1dA23511914a8A',
      },
    ],
    chainlinkPriceFeedAddress: '0xf4030086522a5beea4988f8ca5b36dbc97bee88c',
  },
  {
    id: 5,
    icon: 'https://app.aave.com/icons/tokens/weth.svg',
    symbol: 'WETH',
    chainAddress: [
      {
        chainId: SupportedChainId.SEPOLIA,
        address: '0xC558DBdd856501FCd9aaF1E62eae57A9F0629a3c',
      },
      {
        chainId: SupportedChainId.MUMBAI,
        address: '0xc199807AF4fEDB02EE567Ed0FeB814A077de4802',
      },
    ],
    chainlinkPriceFeedAddress: '0x5f4ec3df9cbd43714fe2740f5e3616155c5b8419',
  },
  {
    id: 6,
    icon: 'https://app.aave.com/icons/tokens/usdt.svg',
    symbol: 'USDT',
    chainAddress: [
      {
        chainId: SupportedChainId.SEPOLIA,
        address: '0xaA8E23Fb1079EA71e0a56F48a2aA51851D8433D0',
      },
      {
        chainId: SupportedChainId.MUMBAI,
        address: '0x1fdE0eCc619726f4cD597887C9F3b4c8740e19e2',
      },
    ],
    chainlinkPriceFeedAddress: '0x3e7d1eab13ad0104d2750b8863b489d65364e32d',
  },
  {
    id: 7,
    icon: 'https://app.aave.com/icons/tokens/aave.svg',
    symbol: 'AAVE',
    chainAddress: [
      {
        chainId: SupportedChainId.SEPOLIA,
        address: '0x88541670E55cC00bEEFD87eB59EDd1b7C511AC9a',
      },
      {
        chainId: SupportedChainId.MUMBAI,
        address: '0x1558c6FadDe1bEaf0f6628BDd1DFf3461185eA24',
      },
    ],
    chainlinkPriceFeedAddress: '0x547a514d5e3769680ce22b2361c10ea13619e8a9',
  },
  {
    id: 8,
    icon: 'https://app.aave.com/icons/tokens/gho.svg',
    symbol: 'GHO',
    chainAddress: [
      {
        chainId: SupportedChainId.SEPOLIA,
        address: '0xc4bF5CbDaBE595361438F8c6a187bDc330539c60',
      },
    ],
    chainlinkPriceFeedAddress: '0x3f12643d3f6f874d39c2a4c9f2cd6f2dbac877fc',
  },
  {
    id: 9,
    icon: 'https://app.aave.com/icons/tokens/wmatic.svg',
    symbol: 'WMATIC',
    chainAddress: [
      {
        chainId: SupportedChainId.MUMBAI,
        address: '0xaD3C5a67275dE4b5554CdD1d961e957f408eF75a',
      },
    ],
    chainlinkPriceFeedAddress: '0x7bac85a8a13a4bcd8abb3eb7d6b4d632c5a57676',
  },
  {
    id: 10,
    icon: 'https://app.aave.com/icons/tokens/crv.svg',
    symbol: 'CRV',
    chainAddress: [
      {
        chainId: SupportedChainId.MUMBAI,
        address: '0x2bbF1f48a678d2f7c291dc5F8fD04805D34F485f',
      },
    ],
    chainlinkPriceFeedAddress: '0xcd627aa160a6fa45eb793d19ef54f5062f20f33f',
  },
];
