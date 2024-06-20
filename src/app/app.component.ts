import {Component,} from '@angular/core';
import {CombineModel} from "./shared/model/combine.model";
import {SelectedModel} from "./shared/model/selected.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  protected valueToCalc: CombineModel = new CombineModel();

  sendToCalc(event: SelectedModel) {
    this.valueToCalc.send = event;
    this.valueToCalc = {...this.valueToCalc}
  }
  getToCalc(event: SelectedModel) {
    this.valueToCalc.get = event
    this.valueToCalc = {...this.valueToCalc}
  }
}
