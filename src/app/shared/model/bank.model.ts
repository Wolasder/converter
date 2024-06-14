import {BaseModel} from './base.model';

export class BankModel extends BaseModel {
  public bankCurrency: string | null;
  public usdBuy: number | null;
  public usdSell: number | null;

  constructor() {
    super();
    this.bankCurrency = '';
    this.usdBuy = 0;
    this.usdSell = 0;
  }
}
