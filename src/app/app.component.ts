import {ChangeDetectionStrategy, Component} from '@angular/core';
import {CombineModel} from './shared/model/combine.model';
import {SelectedModel} from './shared/model/selected.model';
import {BANKS} from './shared/banks';
import {CRYPTO} from './shared/crypto';
import {BANKS_FILTER} from './shared/banks-filter';
import {CurrencyEnum} from './shared/currency.enum';
import {CRYPTO_FILTER} from './shared/crypto-filter';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  protected financialInstitution: SelectedModel[] = BANKS; // изначальное отображение на главном экране в обеих копиях компонента;
  protected usedFilter: string = CurrencyEnum.AllFilter; // изначальное отображение вкладки 'Все';
  protected currencySend: string[] = BANKS_FILTER;
  protected currencyGet: string[] = BANKS_FILTER;
  protected usedCurrencySend: SelectedModel[] = [...this.financialInstitution];
  protected usedCurrencyGet: SelectedModel[] = [...this.financialInstitution];
  protected selectedItemSend: string = CurrencyEnum.AllFilter;
  protected selectedItemGet: string = CurrencyEnum.AllFilter;
  protected valueToCalc: CombineModel = new CombineModel();

  protected fillInfo(event: string, isGet: boolean): void {
    const isCurrency: boolean = event === CurrencyEnum.Currency;
    if (isCurrency) {
      if (isGet) {
        [this.currencyGet, this.selectedItemGet, this.usedCurrencyGet] = [BANKS_FILTER, CurrencyEnum.AllFilter, BANKS];
      } else {
        [this.currencySend, this.selectedItemSend, this.usedCurrencySend] = [
          BANKS_FILTER,
          CurrencyEnum.AllFilter,
          BANKS,
        ];
      }
    } else {
      if (isGet) {
        [this.currencyGet, this.selectedItemGet, this.usedCurrencyGet] = [CRYPTO_FILTER, CurrencyEnum.Crypto, CRYPTO];
      } else {
        [this.currencySend, this.selectedItemSend, this.usedCurrencySend] = [
          CRYPTO_FILTER,
          CurrencyEnum.Crypto,
          CRYPTO,
        ];
      }
    }

    // чтобы при нажатии на Все список не исчезал
    [this.usedFilter, this.financialInstitution] = isCurrency
      ? [CurrencyEnum.AllFilter, BANKS]
      : [CurrencyEnum.Crypto, CRYPTO];
  }

  protected sendToCalc(event: SelectedModel): void {
    this.valueToCalc = {...this.valueToCalc, send: event};
  }
  protected getToCalc(event: SelectedModel): void {
    this.valueToCalc = {...this.valueToCalc, get: event};
  }
}
