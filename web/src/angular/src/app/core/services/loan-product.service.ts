import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {DataService} from "./data.service";
import {LoanProduct} from "../../model/loan-product";
import {map} from "rxjs/operators";
import {Observable} from "rxjs";
import {ServerResp} from "../../model/server-resp";

@Injectable({
  providedIn: 'root'
})
export class LoanProductService {

  constructor(
    private http: HttpClient,
    private dataService: DataService
  ) {
  }

  getLoanProduct(id: number) {
    return this.dataService.get<LoanProduct>(`/api/loan-products/${id}`).pipe(map((data) => data.data));
  }

  getLoanProducts(page, itemsPerPage): Observable<LoanProduct[]> {
    let params = new HttpParams()
      .set('page', page)
      .set('itemsPerPage', itemsPerPage);
    return this.dataService.get<LoanProduct[]>(`/api/loan-products`, params).pipe(map((data) => data.data))
  }

  getLoanProductsCount(): Observable<number> {
    return this.dataService.get<number>(`/api/loan-products/count`).pipe(map((data) => data.data));
  }

  save(loanProduct: LoanProduct): Observable<LoanProduct> {
    return this.dataService.post<LoanProduct>(`/api/loan-products`, loanProduct).pipe(map((data) => data.data));
  }

  public getLoanProductByField(fieldType: string, fieldValue: any): Observable<LoanProduct> {
    let params = new HttpParams()
      .set("fieldName", fieldType)
      .set('value', fieldValue);

    return this.dataService.get<LoanProduct>(`/api/loan-products/unique`, params).pipe(map((data) => data.data));
  }

  public deleteLoanProducts(ids: number[]): Observable<ServerResp<any>> {
    let params = new HttpParams();
    ids.forEach(id => params = params.append('ids', `${id}`));
    return this.dataService.post('/api/loan-products/delete', params);
  }

  public getAllLoanProducts(): Observable<LoanProduct[]> {
    return this.dataService.get<LoanProduct[]>(`/api/loan-products/all`).pipe(map(data => data.data));
  }
}
