import {Component,} from '@angular/core';
import {CombineModel} from "./shared/model/combine.model";
import {BankModel} from "./shared/model/bank.model";
import {CryptoModel} from "./shared/model/crypto.model";
import {SelectedModel} from "./shared/model/selected.model";
import {HttpClient} from "@angular/common/http";
import {CurrencyValueService} from "./services/currency-value.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public valueToCalc: CombineModel = new CombineModel();

  sendToCalc(event: SelectedModel) {
    this.valueToCalc.send = event;
    this.valueToCalc = {...this.valueToCalc}
  }
  getToCalc(event: SelectedModel) {
    this.valueToCalc.get = event
    this.valueToCalc = {...this.valueToCalc}
  }
}
