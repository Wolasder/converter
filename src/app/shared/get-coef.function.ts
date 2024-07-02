import {CurrencyValueService} from '../services/currency-value.service';
import {map, Observable} from 'rxjs';

export function getCoef(
  currencyValueService: CurrencyValueService,
  getCurrency: string,
  sendCurrency: string,
): Observable<number> {
  return currencyValueService
    .getValue(sendCurrency)
    .pipe(map((value) => Math.floor(value.data.rates[getCurrency] * 100000) / 100000));
}
