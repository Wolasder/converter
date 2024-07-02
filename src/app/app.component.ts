import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
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
export class AppComponent implements OnInit {
  protected financial_institution: SelectedModel[] = BANKS;
  protected currencySend: string[] = BANKS_FILTER;
  protected currencyGet: string[] = BANKS_FILTER;
  protected usedCurrencySend: SelectedModel[] = [];
  protected usedCurrencyGet: SelectedModel[] = [];
  protected onInitFilter: string = CurrencyEnum.AllFilter;
  protected selectedItemSend: string = CurrencyEnum.AllFilter;
  protected selectedItemGet: string = CurrencyEnum.AllFilter;
  protected valueToCalc: CombineModel = new CombineModel();

  public ngOnInit(): void {
    //изначально отображает все банки на главной странице
    this.usedCurrencySend.push(...this.financial_institution);
    this.usedCurrencyGet.push(...this.financial_institution);
  }

  protected valueButtonSet(event: string): void {
    if (event === CurrencyEnum.Currency) {
      this.currencySend = BANKS_FILTER;
      this.selectedItemSend = CurrencyEnum.AllFilter;
      this.usedCurrencySend = BANKS;
      this.onInitFilter = CurrencyEnum.AllFilter;
      this.financial_institution = BANKS;
    } else {
      this.currencySend = CRYPTO_FILTER;
      this.selectedItemSend = CurrencyEnum.Crypto;
      this.usedCurrencySend = CRYPTO;
      this.onInitFilter = CurrencyEnum.Crypto;
      this.financial_institution = CRYPTO;
    }
  }

  protected valueButtonGet(event: string): void {
    if (event === CurrencyEnum.Currency) {
      this.currencyGet = BANKS_FILTER;
      this.selectedItemGet = CurrencyEnum.AllFilter;
      this.usedCurrencyGet = BANKS;
      this.onInitFilter = CurrencyEnum.AllFilter;
      this.financial_institution = BANKS;
    } else {
      this.currencyGet = CRYPTO_FILTER;
      this.selectedItemGet = CurrencyEnum.Crypto;
      this.usedCurrencyGet = CRYPTO;
      this.onInitFilter = CurrencyEnum.Crypto;
      this.financial_institution = CRYPTO;
    }
  }

  protected sendToCalc(event: SelectedModel): void {
    this.valueToCalc = {...this.valueToCalc, send: event};
  }
  protected getToCalc(event: SelectedModel): void {
    this.valueToCalc = {...this.valueToCalc, get: event};
  }
}
