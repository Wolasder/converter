import {BankModel} from "./model/bank.model";
import {CurrencyEnum} from "./currency.enum";

// export const BANKS: BankModel[] = [
//   {bankName: 'Альфа-Банк', bankLogo: 'assets/images/banks-logo/Alfa-logo.svg', bankCurrency: 'rub', currencyValue: 88,},
//   {bankName: 'Сбербанк', bankLogo: 'assets/images/banks-logo/Sber-bank-logo.svg', bankCurrency: 'rub', currencyValue: 89.38,},
//   {bankName: 'Татсоцбанк', bankLogo: 'assets/images/banks-logo/Tatsoc-bank-logo.svg', bankCurrency: 'kzt', currencyValue: 444.2,},
//   {bankName: 'Объединенный капитал', bankLogo: 'assets/images/banks-logo/ObiedKap-bank-logo.svg', bankCurrency: 'usd', currencyValue: 1,},
//   {bankName: 'Банк Казани', bankLogo: 'assets/images/banks-logo/Kazan-bank-logo.svg', bankCurrency: 'eur', currencyValue: 0.92,},
//   {bankName: 'Драйв Клик', bankLogo: 'assets/images/banks-logo/Drive-bank-logo.svg', bankCurrency: 'amd', currencyValue: 390.49,},
//   {bankName: 'Абсолют Банк', bankLogo: 'assets/images/banks-logo/Absolut-bank-logo.svg', bankCurrency: 'inr', currencyValue: 83.09,},
//   {bankName: 'Новый Век', bankLogo: 'assets/images/banks-logo/NoviVek-bank-logo.svg', bankCurrency: 'eur', currencyValue: 0.93,},
//   {bankName: 'ОТП Банк', bankLogo: 'assets/images/banks-logo/OTP-bank-logo.svg', bankCurrency: 'rus', currencyValue: 88.2,},
//   {bankName: 'ВУЗ Банк', bankLogo: 'assets/images/banks-logo/Vuz-bank-logo.svg', bankCurrency: 'usd', currencyValue: 1,},
//   {bankName: 'Кольцо Урала', bankLogo: 'assets/images/banks-logo/KolcoUrala-bank-logo.svg', bankCurrency: 'rus', currencyValue: 89,},
// ]
export const BANKS: BankModel[] = [
  {name: 'Альфа-Банк', logo: 'assets/images/banks-logo/Alfa-logo.svg', bankCurrency: CurrencyEnum.Rub, usdBuy: 88, usdSell: 92},
  {name: 'Сбербанк', logo: 'assets/images/banks-logo/Sber-bank-logo.svg', bankCurrency: CurrencyEnum.Rub, usdBuy: 89.38, usdSell: 92},
  {name: 'Татсоцбанк', logo: 'assets/images/banks-logo/Tatsoc-bank-logo.svg', bankCurrency: CurrencyEnum.Kzt, usdBuy: 444.2, usdSell: 449.2},
  {name: 'Объединенный капитал', logo: 'assets/images/banks-logo/ObiedKap-bank-logo.svg', bankCurrency: CurrencyEnum.Usd, usdBuy: 1, usdSell: 1},
  {name: 'Банк Казани', logo: 'assets/images/banks-logo/Kazan-bank-logo.svg', bankCurrency: CurrencyEnum.Eur, usdBuy: 0.92, usdSell: 0.92},
  {name: 'Драйв Клик', logo: 'assets/images/banks-logo/Drive-bank-logo.svg', bankCurrency: CurrencyEnum.Amd, usdBuy: 390.49, usdSell: 394.09},
  {name: 'Абсолют Банк', logo: 'assets/images/banks-logo/Absolut-bank-logo.svg', bankCurrency: CurrencyEnum.Inr, usdBuy: 83.09, usdSell: 85.18},
  {name: 'Новый Век', logo: 'assets/images/banks-logo/NoviVek-bank-logo.svg', bankCurrency: CurrencyEnum.Eur, usdBuy: 0.93, usdSell: 0.92},
  {name: 'ОТП Банк', logo: 'assets/images/banks-logo/OTP-bank-logo.svg', bankCurrency: CurrencyEnum.Rub, usdBuy: 88.2, usdSell: 92},
  {name: 'ВУЗ Банк', logo: 'assets/images/banks-logo/Vuz-bank-logo.svg', bankCurrency: CurrencyEnum.Usd, usdBuy: 1, usdSell: 1},
  {name: 'Кольцо Урала', logo: 'assets/images/banks-logo/KolcoUrala-bank-logo.svg', bankCurrency: CurrencyEnum.Rub, usdBuy: 89, usdSell: 92},
]
