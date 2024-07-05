import {CurrencyEnum} from './currency.enum';

export const CURRENCY_MAP: {[key: string]: string} = {
  [CurrencyEnum.RublesFilter]: CurrencyEnum.Rub,
  [CurrencyEnum.DollarsFilter]: CurrencyEnum.Usd,
  [CurrencyEnum.TengeFilter]: CurrencyEnum.Kzt,
  [CurrencyEnum.DramaFilter]: CurrencyEnum.Amd,
  [CurrencyEnum.RupeeFilter]: CurrencyEnum.Inr,
  [CurrencyEnum.EuroFilter]: CurrencyEnum.Eur,
};
