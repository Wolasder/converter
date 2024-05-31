import {Component, Input} from '@angular/core';
import {BankModel} from "../../shared/model/bank.model";
import {BANKS} from "../../shared/banks";
import {CombineModel} from "../../shared/model/combine.model";
import {FormControl, FormGroup} from "@angular/forms";
import {Subject} from "rxjs";



@Component({
  selector: 'app-calculate-currency',
  templateUrl: './calculate-currency.component.html',
  styleUrls: ['./calculate-currency.component.scss'],
})
export class CalculateCurrencyComponent {
  public sandValue: string = '';
  public convertedValue: number = 0;
  @Input() combineInfo: CombineModel = new CombineModel() || null;

  // constructor(private http: HttpClient) {
  // }

  // public get getCurrency() {
  //   typeof this.combineInfo.send === BankModel ?
  // }

  qweqweqwe() {
    console.log(this.combineInfo.send)
  }


  ngOnInit() {
    // this.http.get('https://v6.exchangerate-api.com/v6/b13a95470fcb9d94b062f03f/latest/USD')
    //   .subscribe((value: any) => {
    //     console.log(value.conversion_rates.RUB)
    //   })
    console.log(this.combineInfo.send)
  }

  swapCalc(): void{
    console.log('swap')
  }

  calculate() {

  }




}
