import {Component,} from '@angular/core';
import {CombineModel} from "./shared/model/combine.model";
import {BankModel} from "./shared/model/bank.model";
import {CryptoModel} from "./shared/model/crypto.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public valueToCalc: CombineModel = new CombineModel();

  sendToCalc(event: BankModel | CryptoModel) {
    this.valueToCalc.send = event
  }
  getToCalc(event: BankModel | CryptoModel) {
    this.valueToCalc.get = event
  }


}
