import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {catchError, EMPTY, Observable, of} from 'rxjs';
import {API_CURRENCY} from '../shared/api';
import {SubscribeValueModel} from '../shared/model/subscribe-value.model';

@Injectable()
export class CurrencyValueService {
  constructor(private readonly http: HttpClient) {}

  public getValue(sendCurrency: string): Observable<SubscribeValueModel | never> {
    return this.http.get<SubscribeValueModel>(API_CURRENCY + sendCurrency).pipe(
      catchError((err: unknown) => {
        console.error(err);
        return EMPTY;
      }),
    );
  }
}
