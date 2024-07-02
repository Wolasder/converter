import {ChangeDetectionStrategy, ChangeDetectorRef, Component, Input} from '@angular/core';
import {CombineModel} from '../../shared/model/combine.model';
import {CurrencyValueService} from '../../services/currency-value.service';
import {SelectedModel} from '../../shared/model/selected.model';
import {getCoef} from '../../shared/get-coef.function';

@Component({
  selector: 'app-calculate-currency',
  templateUrl: './calculate-currency.component.html',
  styleUrls: ['./calculate-currency.component.scss'],
  providers: [CurrencyValueService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CalculateCurrencyComponent {
  protected sandValue: number = 1;
  protected convertedValue: number = 0;
  protected apiValue: number = 0;
  protected combineInfo: CombineModel = new CombineModel();

  @Input()
  public set setCombineInfo(model: CombineModel) {
    if (model.send.name && model.get.name) {
      this.combineInfo = model;
      getCoef(this.currencyValueService, this.combineInfo.get.currency, this.combineInfo.send.currency).subscribe(
        (coef: number) => {
          this.convertedValue = coef;
          this.cdr.markForCheck();
        },
      );
    }
  }

  constructor(
    private readonly currencyValueService: CurrencyValueService,
    private readonly cdr: ChangeDetectorRef,
  ) {}

  protected swapCalc(): void {
    const bufferVariable: SelectedModel | null = this.combineInfo.get;
    this.combineInfo.get = this.combineInfo.send;
    this.combineInfo.send = bufferVariable;
    getCoef(this.currencyValueService, this.combineInfo.get.currency, this.combineInfo.send.currency).subscribe(
      (coef: number) => {
        this.convertedValue = coef;
        this.cdr.markForCheck();
      },
    );
  }
}
