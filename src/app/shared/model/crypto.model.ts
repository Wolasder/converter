import {BaseModel} from "./base.model";

export class CryptoModel extends BaseModel{
  public cryptoUsdValue: number;

  constructor() {
    super();
    this.cryptoUsdValue = 0;
  }
}
