import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Coffee, CustomSettings } from '../models';

@Injectable({
  providedIn: 'root'
})
export class ProductRepositoryService {

  private _env: CustomSettings;
  constructor(private http: HttpClient) { 
    this._env = environment as CustomSettings;
  }

  retrieveAllCoffeeProducts(): Observable<Coffee[]> {
    let headers = new HttpHeaders();
    const url = `${this._env.api.url}/coffee/random_coffee?size=${this._env.application.maxProducts}`;

    return this.http.get<Coffee[]>(url, { headers: headers })
    .pipe(
      // Retry this request up to 'x' times.
      retry(this._env.api.retryCount),
      map(products => {
        return products;
      }),
      catchError((err) => {
        return throwError(err);
      })
    );
  }
}
