import {Component, Input, OnInit} from '@angular/core';
import {BankModel} from "../../shared/model/bank.model";
import {BANKS} from "../../shared/banks";
import {CombineModel} from "../../shared/model/combine.model";
import {FormControl, FormGroup} from "@angular/forms";
import {catchError, Observable, of, Subject} from "rxjs";
import {CryptoModel} from "../../shared/model/crypto.model";
import {HttpClient} from "@angular/common/http";
import {SelectedModel} from "../../shared/model/selected.model";
import {CurrencyValueService} from "../../services/currency-value.service";
import {CurrencyEnum} from "../../shared/currency.enum";
import {ApiModel} from "../../shared/model/api.model";



@Component({
  selector: 'app-calculate-currency',
  templateUrl: './calculate-currency.component.html',
  styleUrls: ['./calculate-currency.component.scss'],
  providers: [CurrencyValueService],
})
export class CalculateCurrencyComponent implements OnInit{
  public sandValue: number = 1;
  public convertedValue: number = 0;
  public apiValue: number = 0;
  public apiValue2: string = '';
  public combineInfo: CombineModel = new CombineModel() || null;

  @Input()
  public set setCombineInfo(model: CombineModel) {
      if (model.send?.name && model.get?.name) {
      this.combineInfo = model;
      this.getCoef();
      this.qwe()
      }
  }

  constructor(
    private http: HttpClient,
    private readonly currencyValueService: CurrencyValueService,
    ) {}

  ngOnInit() {
    this.sandValue = +this.sandValue.toFixed(6)
  }

  qwe() {


  }


  private getCoef(): void {
    if (this.combineInfo.send){
      this.currencyValueService.getValue(this.combineInfo.send.currency)
        .subscribe((value: any | undefined) => {
          if (this.combineInfo.get?.currency !== undefined) {
            this.apiValue = value?.data?.rates[this.combineInfo.get.currency];
            console.log(typeof this.apiValue)
            this.convertedValue = Math.floor(this.apiValue * 100000) / 100000;
            console.log(this.convertedValue)

          }
        })
    }
  }

  swapCalc(): void{
    console.log('swap')
  }




}
