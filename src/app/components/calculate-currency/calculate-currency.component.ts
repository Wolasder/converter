import {Component, Input} from '@angular/core';
import {CombineModel} from '../../shared/model/combine.model';
import {CurrencyValueService} from '../../services/currency-value.service';
import {SelectedModel} from '../../shared/model/selected.model';

@Component({
  selector: 'app-calculate-currency',
  templateUrl: './calculate-currency.component.html',
  styleUrls: ['./calculate-currency.component.scss'],
  providers: [CurrencyValueService],
})
export class CalculateCurrencyComponent {
  protected sandValue: number = 1;
  protected convertedValue: number = 0;
  protected apiValue: number = 0;
  protected combineInfo: CombineModel = new CombineModel() || null;

  @Input()
  public set setCombineInfo(model: CombineModel) {
    if (model.send?.name && model.get?.name) {
      this.combineInfo = model;
      this.getCoef();
    }
  }

  constructor(private readonly currencyValueService: CurrencyValueService) {}

  private getCoef(): void {
    if (this.combineInfo.send) {
      this.currencyValueService.getValue(this.combineInfo.send.currency).subscribe((value: any | undefined) => {
        if (this.combineInfo.get?.currency !== undefined) {
          this.apiValue = value?.data?.rates[this.combineInfo.get.currency];
        }
        this.convertedValue = Math.floor(this.apiValue * 100000) / 100000;
      });
    }
  }

  protected swapCalc(): void {
    const bufferVariable: SelectedModel | null = this.combineInfo.get;
    this.combineInfo.get = this.combineInfo.send;
    this.combineInfo.send = bufferVariable;
    this.getCoef();
  }
}
