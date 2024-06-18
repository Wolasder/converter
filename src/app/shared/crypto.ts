import {CryptoModel} from './model/crypto.model';
import {CurrencyEnum} from './currency.enum';
import {SelectedModel} from "./model/selected.model";

export const CRYPTO: SelectedModel[] = [
  {name: 'Bitcoin', logo: 'assets/images/crypto-logo/bitcoin-crypto-logo.svg', currency: CurrencyEnum.Bitcoin, usdValue: 0},
  {name: 'Efforce', logo: 'assets/images/crypto-logo/efforce-crypto-logo.svg', currency: CurrencyEnum.Efforce, usdValue: 1},
  {name: 'Ethereum', logo: 'assets/images/crypto-logo/ethereum-crypto-logo.svg', currency: CurrencyEnum.Ethereum, usdValue: 2},
  {name: 'FUN Token', logo: 'assets/images/crypto-logo/fun-crypto-logo.svg', currency: CurrencyEnum.FunToken, usdValue: 3},
  {name: 'Binance', logo: 'assets/images/crypto-logo/binance-crypto-logo.svg', currency: CurrencyEnum.Binance, usdValue: 4},
  {name: 'Raydium', logo: 'assets/images/crypto-logo/raydium-crypto-logo.svg', currency: CurrencyEnum.Raydium, usdValue: 6},
  {name: 'Voyager', logo: 'assets/images/crypto-logo/voyager-crypto-logo.svg', currency: CurrencyEnum.Voyager, usdValue: 7},
];



// export const CRYPTO: CryptoModel[] = [
//   {name: 'Bitcoin', logo: 'assets/images/crypto-logo/bitcoin-crypto-logo.svg', cryptoUsdValue: 0},
//   {name: 'Efforce', logo: 'assets/images/crypto-logo/efforce-crypto-logo.svg', cryptoUsdValue: 1},
//   {name: 'Ethereum', logo: 'assets/images/crypto-logo/ethereum-crypto-logo.svg', cryptoUsdValue: 2},
//   {name: 'FUN Token', logo: 'assets/images/crypto-logo/fun-crypto-logo.svg', cryptoUsdValue: 3},
//   {name: 'Binance', logo: 'assets/images/crypto-logo/binance-crypto-logo.svg', cryptoUsdValue: 4},
//   {name: 'hi Fi Finance', logo: 'assets/images/crypto-logo/hiFiFin-crypto-logo.svg', cryptoUsdValue: 5},
//   {name: 'Raydium', logo: 'assets/images/crypto-logo/raydium-crypto-logo.svg', cryptoUsdValue: 6},
//   {name: 'Voyager', logo: 'assets/images/crypto-logo/voyager-crypto-logo.svg', cryptoUsdValue: 7},
// ];
