export class SubscribeValueModel {
  public data: {
    currency: string;
    rates: {
      [key: string]: string;
    };
  };

  constructor() {
    this.data = {
      currency: '',
      rates: {},
    };
  }
}
