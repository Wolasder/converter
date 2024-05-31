import {BankModel} from "./bank.model";
import {CryptoModel} from "./crypto.model";

export class CombineModel {
  public send: BankModel | CryptoModel | null;
  public get: BankModel | CryptoModel | null;

  constructor() {
    this.send = null;
    this.get = null;
  }
}
