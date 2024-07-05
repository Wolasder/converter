import {CurrencyEnum} from './currency.enum';
import {SelectedModel} from './model/selected.model';

export const CRYPTO: SelectedModel[] = [
  {name: 'Bitcoin', logo: 'assets/images/crypto-logo/bitcoin-crypto-logo.svg', currency: CurrencyEnum.Bitcoin},
  {name: 'Efforce', logo: 'assets/images/crypto-logo/efforce-crypto-logo.svg', currency: CurrencyEnum.Efforce},
  {name: 'Ethereum', logo: 'assets/images/crypto-logo/ethereum-crypto-logo.svg', currency: CurrencyEnum.Ethereum},
  {name: 'FUN Token', logo: 'assets/images/crypto-logo/fun-crypto-logo.svg', currency: CurrencyEnum.FunToken},
  {name: 'Binance', logo: 'assets/images/crypto-logo/binance-crypto-logo.svg', currency: CurrencyEnum.Binance},
  {name: 'Raydium', logo: 'assets/images/crypto-logo/raydium-crypto-logo.svg', currency: CurrencyEnum.Raydium},
  {name: 'Voyager', logo: 'assets/images/crypto-logo/voyager-crypto-logo.svg', currency: CurrencyEnum.Voyager},
];
