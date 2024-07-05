import {ChangeDetectionStrategy, ChangeDetectorRef, Component, Input} from '@angular/core';
import {CombineModel} from '../../shared/model/combine.model';
import {CurrencyValueService} from '../../services/currency-value.service';
import {SelectedModel} from '../../shared/model/selected.model';
import {getCoeffLogick} from '../../shared/get-coef-logick.function';
import {Subject} from 'rxjs';
import {SubscribeValueModel} from '../../shared/model/subscribe-value.model';

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
  private readonly unsubscribe$: Subject<void> = new Subject();

  @Input()
  public set setCombineInfo(model: CombineModel) {
    if (model.send.name && model.get.name) {
      this.combineInfo = model;
      this.getCoef();
    }
  }

  constructor(
    private readonly currencyValueService: CurrencyValueService,
    private readonly cdr: ChangeDetectorRef,
  ) {}

  private getCoef(): void {
    this.currencyValueService.getValue(this.combineInfo.send.currency).subscribe((value: SubscribeValueModel) => {
      this.apiValue = +value.data.rates[this.combineInfo.get.currency];
      this.convertedValue = getCoeffLogick(this.apiValue);
      this.cdr.markForCheck();
    });
  }

  protected swapCalc(): void {
    const bufferVariable: SelectedModel = this.combineInfo.get;
    this.combineInfo.get = this.combineInfo.send;
    this.combineInfo.send = bufferVariable;
    this.getCoef();
  }

  public ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
