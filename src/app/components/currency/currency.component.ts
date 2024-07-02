import {ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, Output, ViewChild} from '@angular/core';
import {CurrencyEnum} from '../../shared/currency.enum';
import {SelectedModel} from '../../shared/model/selected.model';
import {CURRENCY_MAP} from '../../shared/currency-map';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CurrencyComponent {
  protected checkedButtonBoolean: boolean = true;
  protected buttonValue: string = CurrencyEnum.Currency;

  @Input() public selectedItem: string = '';
  @Input() public title: string = '';
  @Input() public onInitFilter: string = '';
  @Input() public currency: string[] = [];
  @Input() public usedCurrencies: SelectedModel[] = [];
  @Input() public financial_institution: SelectedModel[] = [];

  @Output() public checkedButtonValue: EventEmitter<string> = new EventEmitter<string>();
  @Output() public toAppCalc: EventEmitter<SelectedModel> = new EventEmitter<SelectedModel>();

  @ViewChild('widgetsContent', {read: ElementRef}) public widgetsContent?: ElementRef<any>;

  protected currencyValue(event: string) {
    this.checkedButtonValue.emit(event);
  }

  protected toCalc(event: SelectedModel): void {
    this.toAppCalc.emit(event);
  }

  protected usedFilter(filter: string): void {
    this.selectedItem = filter;
    this.usedCurrencies = [];

    if (filter === this.onInitFilter) {
      this.usedCurrencies.push(...this.financial_institution);
    } else {
      this.usedCurrencies.push(
        ...this.financial_institution.filter((currency: SelectedModel) => currency.currency === CURRENCY_MAP[filter]),
      );
    }
  }

  protected scrollRight(): void {
    this.widgetsContent?.nativeElement.scrollTo({
      left: this.widgetsContent.nativeElement.scrollLeft + 100,
      behavior: 'smooth',
    });
  }

  protected scrollLeft(): void {
    this.widgetsContent?.nativeElement.scrollTo({
      left: this.widgetsContent.nativeElement.scrollLeft - 100,
      behavior: 'smooth',
    });
  }
}
