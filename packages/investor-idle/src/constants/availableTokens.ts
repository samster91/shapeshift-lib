// import { AbiItem } from 'web3-utils'
// import { erc20Abi, idleTokenV4Abi } from './index'

/**
 * Annual Percentage Yield of a particular vault.
 */
export interface Apy {
  net_apy: number;
}

export interface IdleVault {
  apr: number,
  apy?: Apy,
  tvl: number,
  address: string,
  strategy: string,
  poolName: string,
  tokenName: string,
  pricePerShare: number,
  underlyingTVL: number,
  underlyingAddress: string
};

export const availableTokens: IdleVault[] = [{"address":"0x3fE7940616e5Bc47b0775a0dccf6237893353bB4","poolName":"DAI","strategy":"Best","tokenName":"DAI","pricePerShare":1.0830856,"underlyingTVL":10949080.0417331300,"underlyingAddress":"0x6B175474E89094C44Da98b954EedeAC495271d0F","apr":1.14050554,"tvl":10956037.13010988},{"address":"0x5274891bEC421B39D23760c04A6755eCB444797C","poolName":"USDC","strategy":"Best","tokenName":"USDC","pricePerShare":1.084625,"underlyingTVL":12868536.8133977,"underlyingAddress":"0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48","apr":1.04251349,"tvl":12871988.27034945},{"address":"0xF34842d05A1c888Ca02769A633DF37177415C2f8","poolName":"USDT","strategy":"Best","tokenName":"USDT","pricePerShare":1.099199,"underlyingTVL":7423792.90388214,"underlyingAddress":"0xdAC17F958D2ee523a2206206994597C13D831ec7","apr":1.818939,"tvl":7424161.43389799},{"address":"0xF52CDcD458bf455aeD77751743180eC4A595Fd3F","poolName":"SUSD","strategy":"Best","tokenName":"SUSD","pricePerShare":1.14485474,"underlyingTVL":11928.85741966,"underlyingAddress":"0x57ab1ec28d129707052df4df418d58a2d46d5f51","apr":94.73711221,"tvl":11928.85741966},{"address":"0xc278041fDD8249FE4c1Aad1193876857EEa3D68c","poolName":"TUSD","strategy":"Best","tokenName":"TUSD","pricePerShare":1.06648629,"underlyingTVL":4325.2546666,"underlyingAddress":"0x0000000000085d4780B73119b644AE5ecd22b376","apr":0.25413497,"tvl":4325.2546666},{"address":"0x8C81121B15197fA0eEaEE1DC75533419DcfD3151","poolName":"WBTC","strategy":"Best","tokenName":"WBTC","pricePerShare":1.00361755,"underlyingTVL":1.88247713,"underlyingAddress":"0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599","apr":0.13783141,"tvl":41436.06875713},{"address":"0xC8E6CA6E96a326dC448307A5fDE90a0b21fd7f80","poolName":"WETH","strategy":"Best","tokenName":"WETH","pricePerShare":1.00290646,"underlyingTVL":360.77609767,"underlyingAddress":"0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2","apr":1.03807696,"tvl":537636.63199131},{"address":"0x5C960a3DCC01BE8a0f49c02A8ceBCAcf5D07fABe","poolName":"RAI","strategy":"Best","tokenName":"RAI","pricePerShare":1.03264339,"underlyingTVL":84588.56638759,"underlyingAddress":"0x03ab458634910aad20ef5f1c8ee96f1d6ac54919","apr":4.56860664,"tvl":250275.00622384},{"address":"0xb2d5CB72A621493fe83C6885E4A776279be595bC","poolName":"FEI","strategy":"Best","tokenName":"FEI","pricePerShare":1.0489894,"underlyingTVL":114725.66152145,"underlyingAddress":"0x956f47f50a910163d8bf957cf5846d573e7f87ca","apr":0.5707841,"tvl":114725.66152145},{"address":"0xE9ada97bDB86d827ecbaACCa63eBcD8201D8b12E","strategy":"Senior Tranche","poolName":"Idle DAI Senior Tranche","tokenName":"DAI","pricePerShare":1.00580116,"underlyingTVL":100606.85031635,"underlyingAddress":"0x6B175474E89094C44Da98b954EedeAC495271d0F","apr":0.21155916,"tvl":100606.85031635},{"address":"0x9cE3a740Df498646939BcBb213A66BBFa1440af6","strategy":"Senior Tranche","poolName":"Idle FEI Senior Tranche","tokenName":"FEI","pricePerShare":38.77849335,"underlyingTVL":12413.04778194,"underlyingAddress":"0x956f47f50a910163d8bf957cf5846d573e7f87ca","apr":0.0518617,"tvl":12413.04778194},{"address":"0x15794DA4DCF34E674C18BbFAF4a67FF6189690F5","strategy":"Senior Tranche","poolName":"Convex frax3CRV Senior Tranche","tokenName":"FRAX3CRV","pricePerShare":1.02689613,"underlyingTVL":6102.00921916,"underlyingAddress":"0xd632f22692FaC7611d2AA1C0D552930D43CAEd3B","apr":1.54888564,"tvl":6102.00921916},{"address":"0xFC96989b3Df087C96C806318436B16e44c697102","strategy":"Senior Tranche","poolName":"Convex mim3CRV Senior Tranche","tokenName":"MIM3CRV","pricePerShare":1.06295173,"underlyingTVL":1328.13832138,"underlyingAddress":"0x5a6A4D54456819380173272A5E8E9B9904BdF41B","apr":3.87333405,"tvl":1328.13832138},{"address":"0x790E38D85a364DD03F682f5EcdC88f8FF7299908","strategy":"Senior Tranche","poolName":"Convex alusd3CRV Senior Tranche","tokenName":"ALUSD3CRV","pricePerShare":1.00863126,"underlyingTVL":52896.38687225,"underlyingAddress":"0x43b4FdFD4Ff969587185cDB6f0BD875c5Fc83f8c","apr":0.86990102,"tvl":52896.38687225},{"address":"0x4585F56B06D098D4EDBFc5e438b8897105991c6A","strategy":"Senior Tranche","poolName":"Convex musd3CRV Senior Tranche","tokenName":"MUSD3CRV","pricePerShare":1.00009621,"underlyingTVL":0.49187587,"underlyingAddress":"0x1AEf73d49Dedc4b1778d0706583995958Dc862e6","apr":1.67370667,"tvl":0.49187587},{"address":"0x158e04225777BBEa34D2762b5Df9eBD695C158D2","strategy":"Senior Tranche","poolName":"Convex 3eurCRV Senior Tranche","tokenName":"3EURCRV","pricePerShare":1.00249448,"underlyingTVL":37949.06529435,"underlyingAddress":"0xb9446c4Ef5EBE66268dA6700D26f96273DE3d571","apr":0.65756873,"tvl":37949.06529435},{"address":"0x060a53BCfdc0452F35eBd2196c6914e0152379A6","strategy":"Senior Tranche","poolName":"Convex steCRV Senior Tranche","tokenName":"STECRV","pricePerShare":1.00001113,"underlyingTVL":7.14670152,"underlyingAddress":"0x06325440D014e39736583c165C2963BA99fAf14E","apr":0.74509866,"tvl":7.14670152},{"address":"0x1e095cbF663491f15cC1bDb5919E701b27dDE90C","strategy":"Senior Tranche","poolName":"Euler USDC Senior Tranche","tokenName":"USDC","pricePerShare":1.001173,"underlyingTVL":10194.732742,"underlyingAddress":"0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48","apr":0.56733798,"tvl":10194.732742},{"address":"0xE0f126236d2a5b13f26e72cBb1D1ff5f297dDa07","strategy":"Senior Tranche","poolName":"Euler USDT Senior Tranche","tokenName":"USDT","pricePerShare":1.000635,"underlyingTVL":10011.006975,"underlyingAddress":"0xdAC17F958D2ee523a2206206994597C13D831ec7","apr":1.05772603,"tvl":10011.006975},{"address":"0x852c4d2823E98930388b5cE1ed106310b942bD5a","strategy":"Senior Tranche","poolName":"Euler DAI Senior Tranche","tokenName":"DAI","pricePerShare":1.00001359,"underlyingTVL":10005.02506823,"underlyingAddress":"0x6B175474E89094C44Da98b954EedeAC495271d0F","apr":0.57635625,"tvl":10005.02506823},{"address":"0x624DfE05202b66d871B8b7C0e14AB29fc3a5120c","strategy":"Senior Tranche","poolName":"Euler agEUR Senior Tranche","tokenName":"AGEUR","pricePerShare":1,"underlyingTVL":5.02499997,"underlyingAddress":"0x1a7e4e63778b4f12a199c062f3efdd288afcbce8","apr":0.1794387,"tvl":5.02499997},{"address":"0xb86264c21418aA75F7c337B1821CcB4Ff4d57673","strategy":"Senior Tranche","poolName":"Clearpool USDC Senior Tranche","tokenName":"USDC","pricePerShare":1.000785,"underlyingTVL":7005.274036,"underlyingAddress":"0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48","apr":7.74356829,"tvl":7005.274036},{"address":"0xfC558914b53BE1DfAd084fA5Da7f281F798227E7","strategy":"Senior Tranche","poolName":"mStable mUSD Senior Tranche","tokenName":"MUSD","pricePerShare":1,"underlyingTVL":0.49948245,"underlyingAddress":"0xe2f2a5C287993345a840Db3B0845fbC70f5935a5","apr":1.11453763,"tvl":0.49948245},{"address":"0x730348a54bA58F64295154F0662A08Cbde1225c2","strategy":"Junior Tranche","poolName":"Idle DAI Junior Tranche","tokenName":"DAI","pricePerShare":1.04434371,"underlyingTVL":107580.34554333,"underlyingAddress":"0x6B175474E89094C44Da98b954EedeAC495271d0F","apr":1.79245596,"tvl":107580.34554333},{"address":"0x2490D810BF6429264397Ba721A488b0C439aA745","strategy":"Junior Tranche","poolName":"Idle FEI Junior Tranche","tokenName":"FEI","pricePerShare":149.6969385,"underlyingTVL":149.69693461,"underlyingAddress":"0x956f47f50a910163d8bf957cf5846d573e7f87ca","apr":46.70092179,"tvl":149.69693461},{"address":"0x18cf59480d8c16856701F66028444546B7041307","strategy":"Junior Tranche","poolName":"Convex frax3CRV Junior Tranche","tokenName":"FRAX3CRV","pricePerShare":1.11435899,"underlyingTVL":4409.9359782,"underlyingAddress":"0xd632f22692FaC7611d2AA1C0D552930D43CAEd3B","apr":21.09504824,"tvl":4409.9359782},{"address":"0x5346217536852CD30A5266647ccBB6f73449Cbd1","strategy":"Junior Tranche","poolName":"Convex mim3CRV Junior Tranche","tokenName":"MIM3CRV","pricePerShare":1.90161469,"underlyingTVL":890.72375983,"underlyingAddress":"0x5a6A4D54456819380173272A5E8E9B9904BdF41B","apr":66.52249489,"tvl":890.72375983},{"address":"0xa0E8C9088afb3Fa0F40eCDf8B551071C34AA1aa4","strategy":"Junior Tranche","poolName":"Convex alusd3CRV Junior Tranche","tokenName":"ALUSD3CRV","pricePerShare":1.00725205,"underlyingTVL":24637.12867062,"underlyingAddress":"0x43b4FdFD4Ff969587185cDB6f0BD875c5Fc83f8c","apr":17.55275597,"tvl":24637.12867062},{"address":"0xFb08404617B6afab0b19f6cEb2Ef9E07058D043C","strategy":"Junior Tranche","poolName":"Convex musd3CRV Junior Tranche","tokenName":"MUSD3CRV","pricePerShare":1.00086587,"underlyingTVL":0.49225442,"underlyingAddress":"0x1AEf73d49Dedc4b1778d0706583995958Dc862e6","apr":16.09834454,"tvl":0.49225442},{"address":"0x3061C652b49Ae901BBeCF622624cc9f633d01bbd","strategy":"Junior Tranche","poolName":"Convex 3eurCRV Junior Tranche","tokenName":"3EURCRV","pricePerShare":1.00644666,"underlyingTVL":1036.38581291,"underlyingAddress":"0xb9446c4Ef5EBE66268dA6700D26f96273DE3d571","apr":766.6101955,"tvl":1036.38581291},{"address":"0xd83246d2bCBC00e85E248A6e9AA35D0A1548968E","strategy":"Junior Tranche","poolName":"Convex steCRV Junior Tranche","tokenName":"STECRV","pricePerShare":1.00010017,"underlyingTVL":13.54622111,"underlyingAddress":"0x06325440D014e39736583c165C2963BA99fAf14E","apr":3.55752767,"tvl":13.54622111},{"address":"0xe11679CDb4587FeE907d69e9eC4a7d3F0c2bcf3B","strategy":"Junior Tranche","poolName":"Euler USDC Junior Tranche","tokenName":"USDC","pricePerShare":1.048395,"underlyingTVL":1190.616905,"underlyingAddress":"0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48","apr":1.20440827,"tvl":1190.616905},{"address":"0xb1EC065abF6783BCCe003B8d6B9f947129504854","strategy":"Junior Tranche","poolName":"Euler USDT Junior Tranche","tokenName":"USDT","pricePerShare":1.016753,"underlyingTVL":4.145953,"underlyingAddress":"0xdAC17F958D2ee523a2206206994597C13D831ec7","apr":30.17070724,"tvl":4.145953},{"address":"0x6629baA8C7c6a84290Bf9a885825E3540875219D","strategy":"Junior Tranche","poolName":"Euler DAI Junior Tranche","tokenName":"DAI","pricePerShare":1.00003736,"underlyingTVL":3.76889078,"underlyingAddress":"0x6B175474E89094C44Da98b954EedeAC495271d0F","apr":17.18346566,"tvl":3.76889078},{"address":"0xcf5FD05F72cA777d71FB3e38F296AAD7cE735cB7","strategy":"Junior Tranche","poolName":"Euler agEUR Junior Tranche","tokenName":"AGEUR","pricePerShare":1,"underlyingTVL":5.02499997,"underlyingAddress":"0x1a7e4e63778b4f12a199c062f3efdd288afcbce8","apr":0.53916008,"tvl":5.02499997},{"address":"0x4D9d9AA17c3fcEA05F20a87fc1991A045561167d","strategy":"Junior Tranche","poolName":"Clearpool USDC Junior Tranche","tokenName":"USDC","pricePerShare":1.002354,"underlyingTVL":3005.282307,"underlyingAddress":"0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48","apr":19.85019035,"tvl":3005.282307},{"address":"0x91fb938FEa02DFd5303ACeF5a8A2c0CaB62b94C7","strategy":"Junior Tranche","poolName":"mStable mUSD Junior Tranche","tokenName":"MUSD","pricePerShare":1,"underlyingTVL":0.49948245,"underlyingAddress":"0xe2f2a5C287993345a840Db3B0845fbC70f5935a5","apr":10.4889728,"tvl":0.49948245},{"address":"0x2688FC68c4eac90d9E5e1B94776cF14eADe8D877","strategy":"Senior Tranche","poolName":"Lido stETH Senior Tranche","tokenName":"STETH","pricePerShare":1.00708367,"underlyingTVL":6387.03310946,"underlyingAddress":"0xae7ab96520de3a18e5e111b5eaab095312d7fe84","apr":1.20885509,"tvl":9324723.48187637},{"address":"0x4657B96D587c4d46666C244B40216BEeEA437D0d","strategy":"Senior Tranche","poolName":"Convex pbtcCRV Senior Tranche","tokenName":"PBTCCRV","pricePerShare":1.00301807,"underlyingTVL":2.35728276,"underlyingAddress":"0xC9467E453620f16b57a34a770C6bceBECe002587","apr":2.6756482,"tvl":51576.11525197},{"address":"0x3a52fa30c33cAF05fAeE0f9c5Dfe5fd5fe8B3978","strategy":"Junior Tranche","poolName":"Lido stETH Junior Tranche","tokenName":"STETH","pricePerShare":1.06864484,"underlyingTVL":3367.70803583,"underlyingAddress":"0xae7ab96520de3a18e5e111b5eaab095312d7fe84","apr":9.54173671,"tvl":4916671.8981402},{"address":"0x3872418402d1e967889aC609731fc9E11f438De5","strategy":"Junior Tranche","poolName":"Convex pbtcCRV Junior Tranche","tokenName":"PBTCCRV","pricePerShare":1.1327447,"underlyingTVL":6.04095958,"underlyingAddress":"0xC9467E453620f16b57a34a770C6bceBECe002587","apr":9.7058327,"tvl":132173.03945542}];