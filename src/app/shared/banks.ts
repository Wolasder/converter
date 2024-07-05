import {CurrencyEnum} from './currency.enum';
import {SelectedModel} from './model/selected.model';

export const BANKS: SelectedModel[] = [
  {name: 'Альфа-Банк', logo: 'assets/images/banks-logo/Alfa-logo.svg', currency: CurrencyEnum.Rub},
  {name: 'Сбербанк', logo: 'assets/images/banks-logo/Sber-bank-logo.svg', currency: CurrencyEnum.Rub},
  {name: 'Татсоцбанк', logo: 'assets/images/banks-logo/Tatsoc-bank-logo.svg', currency: CurrencyEnum.Kzt},
  {name: 'Объединенный капитал', logo: 'assets/images/banks-logo/ObiedKap-bank-logo.svg', currency: CurrencyEnum.Usd},
  {name: 'Банк Казани', logo: 'assets/images/banks-logo/Kazan-bank-logo.svg', currency: CurrencyEnum.Eur},
  {name: 'Драйв Клик', logo: 'assets/images/banks-logo/Drive-bank-logo.svg', currency: CurrencyEnum.Amd},
  {name: 'Абсолют Банк', logo: 'assets/images/banks-logo/Absolut-bank-logo.svg', currency: CurrencyEnum.Inr},
  {name: 'Новый Век', logo: 'assets/images/banks-logo/NoviVek-bank-logo.svg', currency: CurrencyEnum.Eur},
  {name: 'ОТП Банк', logo: 'assets/images/banks-logo/OTP-bank-logo.svg', currency: CurrencyEnum.Rub},
  {name: 'ВУЗ Банк', logo: 'assets/images/banks-logo/Vuz-bank-logo.svg', currency: CurrencyEnum.Usd},
  {name: 'Кольцо Урала', logo: 'assets/images/banks-logo/KolcoUrala-bank-logo.svg', currency: CurrencyEnum.Rub},
];
