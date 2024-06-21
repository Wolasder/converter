import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {catchError, Observable, of} from 'rxjs';

@Injectable()
export class CurrencyValueService {
  constructor(private http: HttpClient) {}

  public getValue(sendCurrency: string): Observable<any> {
    return this.http
      .get('https://api.coinbase.com/v2/exchange-rates?currency=' + sendCurrency)
      .pipe(catchError(() => of({})));
  }
}
