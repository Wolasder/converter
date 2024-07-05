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
  @Input() public usedFilter: string = '';
  @Input() public currency: string[] = [];
  @Input() public usedCurrencies: SelectedModel[] = [];
  @Input() public financialInstitution: SelectedModel[] = [];

  @Output() public checkedButtonValue: EventEmitter<string> = new EventEmitter<string>();
  @Output() public toAppCalc: EventEmitter<SelectedModel> = new EventEmitter<SelectedModel>();

  @ViewChild('widgetsContent', {read: ElementRef}) public widgetsContent: ElementRef<HTMLElement> | undefined;

  protected useFilter(filter: string): void {
    this.selectedItem = filter; // filter это item, т.е. выбранный фильтр. Делает бордер при выборе фильтра (меняет NgClass)
    this.usedCurrencies = [];

    this.usedCurrencies.push(
      ...(filter === this.usedFilter
        ? this.financialInstitution
        : this.financialInstitution.filter((currency: SelectedModel) => currency.currency === CURRENCY_MAP[filter])),
    );
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
