import { Injectable } from '@angular/core';
import { ProductionData } from './productionData';
import { PRODUCTION_DATA_SET } from './mock-productionDataSets';

import { Observable ,  of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable()
export class ProductionDataService {

  private productionDataUrl = 'api/productionDataSets'; // URL to web api

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) { }


  getMockProductionDataSets(): Observable<ProductionData[]> {
    // TODO: Send the mesage _after_ fetching the production data
    this.messageService.add('ProductionDataService: fetched production data sets');
    return of(PRODUCTION_DATA_SET);
  }

  /** Get production data form the server */
  getProductionDataSets(): Observable<ProductionData[]> {
    return this.http.get<ProductionData[]>(this.productionDataUrl)
    .pipe(
      tap(productionDataSets => this.log(`fetched production data sets`)),
      catchError(this.handleError('getProductionDataSets', []))
    );
  }

  /** GET: Production Data Set by id. Will 404 if id not found */
  getProductionDataSet(id: number): Observable<ProductionData> {
    const url = `${this.productionDataUrl}/${id}`;
    return this.http.get<ProductionData>(url).pipe(
      tap(_ => this.log(`fetched hero id=${id}`)),
      catchError(this.handleError<ProductionData>(`getProductionDataSet id=${id}`))
    );
  }

  /** PUT: update the production data on the server */
  updateProductionData (productionData: ProductionData): Observable<any> {
    return this.http.put(this.productionDataUrl, productionData, httpOptions).pipe(
      tap(_ => this.log(`updated production data set value=${productionData.value}`)),
      catchError(this.handleError<any>('updateProductionData'))
    );
  }

  /** POST: add a new production data to the server */
  addProductionData(productionData: ProductionData): Observable<ProductionData> {
    return this.http.post<ProductionData>(this.productionDataUrl, productionData, httpOptions).pipe(
      tap((aProductionData: ProductionData) => this.log(`add production data set w/ value=${aProductionData.value}`)),
      catchError(this.handleError<ProductionData>('addProductionData'))
    );
  }

  /** DELETE: delete the production data from the server */
  deleteProductionData(productionData: ProductionData | number): Observable<ProductionData> {
    const id = typeof productionData === 'number' ? productionData : productionData.id;
    const url = `${this.productionDataUrl}/${id}`;

    return this.http.delete<ProductionData>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted production data set id=${id}`)),
      catchError(this.handleError<ProductionData>('deleteProductionData'))
    );
  }

  /* Log a Production Data Service mesage with the MessageService */
  private log(message: String) {
    this.messageService.add('ProductionDataService: ' + message);
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return(error: any): Observable<T> => {
      // TODO: Send the error to the remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: Better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
