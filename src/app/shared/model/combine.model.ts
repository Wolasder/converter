import {SelectedModel} from './selected.model';

export class CombineModel {
  public send: SelectedModel;
  public get: SelectedModel;

  constructor() {
    this.send = new SelectedModel();
    this.get = new SelectedModel();
  }
}
