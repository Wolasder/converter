import {SelectedModel} from "./selected.model";

export class CombineModel {
  public send: SelectedModel | null;
  public get: SelectedModel | null;

  constructor() {
    this.send = new SelectedModel() || null;
    this.get = new SelectedModel() || null;
  }
}
