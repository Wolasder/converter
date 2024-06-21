import {Component, ElementRef, EventEmitter, Input, Output, ViewChild} from '@angular/core';
import {BANKS} from '../../shared/banks';
import {CURRENCY} from '../../shared/currency';
import {CRYPTO} from '../../shared/crypto';
import {CurrencyEnum} from '../../shared/currency.enum';
import {SelectedModel} from '../../shared/model/selected.model';

const currencyMap: {[key: string]: string} = {
  [CurrencyEnum.RublesFilter]: CurrencyEnum.Rub,
  [CurrencyEnum.DollarsFilter]: CurrencyEnum.Usd,
  [CurrencyEnum.TengeFilter]: CurrencyEnum.Kzt,
  [CurrencyEnum.DramaFilter]: CurrencyEnum.Amd,
  [CurrencyEnum.RupeeFilter]: CurrencyEnum.Inr,
  [CurrencyEnum.EuroFilter]: CurrencyEnum.Eur,
} as const;

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.scss'],
})
export class CurrencyComponent {
  private banks: SelectedModel[] = BANKS;
  protected crypto: SelectedModel[] = CRYPTO;
  protected currency: string[] = CURRENCY;
  protected checkedButtonValue: string = 'Валюта';
  protected checkedButtonBoolean: boolean = true;
  protected usedBanks: SelectedModel[] = [];
  protected selectedItem: string = '';

  @Input() public title: string = '';
  @Input() public whenIsCheck: boolean = true;

  @Output() public toAppCalc: EventEmitter<SelectedModel> = new EventEmitter<SelectedModel>();

  @ViewChild('widgetsContent', {read: ElementRef}) public widgetsContent?: ElementRef<any>;

  public toCalc(event: SelectedModel): void {
    this.toAppCalc.emit(event);
  }

  public usedFilter(filter: string): void {
    this.selectedItem = filter;
    this.usedBanks = [];

    if (filter === CurrencyEnum.AllFilter) {
      this.usedBanks.push(...this.banks);
    } else {
      this.usedBanks.push(...this.banks.filter((currency: SelectedModel) => currency.currency === currencyMap[filter]));
    }
  }

  public scrollRight(): void {
    this.widgetsContent?.nativeElement.scrollTo({
      left: this.widgetsContent.nativeElement.scrollLeft + 100,
      behavior: 'smooth',
    });
  }

  public scrollLeft(): void {
    this.widgetsContent?.nativeElement.scrollTo({
      left: this.widgetsContent.nativeElement.scrollLeft - 100,
      behavior: 'smooth',
    });
  }
}
