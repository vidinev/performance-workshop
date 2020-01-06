import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CacheLeakService {
  cache: { [key: string]: any[] } = { };
  private readonly itemsUrl = 'https://jsonblob.com/api/jsonBlob/dda04a36-3014-11ea-beca-619f010bc026';

  constructor(private http: HttpClient) { }

  getItems(params): Observable<{ items: any[] }> {
    const stringParams = JSON.stringify(params);

    // Return cached data if exist
    if (this.cache[stringParams]) {
      return of({ items: this.cache[stringParams] });
    }

    // Get data by http with specific params
    return this.http.get<{ items: any[] }>(this.itemsUrl, {
      params: new HttpParams(params)
    }).pipe(
      // Write data to cache
      tap((res) => this.cache[stringParams] = res.items)
    );
  }
}


