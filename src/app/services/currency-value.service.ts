import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {catchError, Observable, of} from 'rxjs';
import {API_CURRENCY} from '../shared/api';

@Injectable()
export class CurrencyValueService {
  constructor(private readonly http: HttpClient) {}

  public getValue(sendCurrency: string): Observable<string | {}> {
    return this.http.get(API_CURRENCY + sendCurrency).pipe(
      catchError((err: unknown) => {
        console.error(err);
        return of({});
      }),
    );
  }
}
