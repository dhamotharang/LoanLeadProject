import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {Customer} from "../../model/customer";
import {map} from "rxjs/operators";
import {DataService} from "./data.service";
import {ServerResp} from "../../model/server-resp";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(
    private http: HttpClient,
    private dataService: DataService
  ) { }

  getCustomer(id: number) {
    return this.dataService.get<Customer>(`/api/customers/${id}`).pipe(map((data) => data.data));
  }

  getAllCustomers(): Observable<Customer[]> {
    return this.dataService.get<Customer[]>(`/api/customers/all`).pipe(map((data) => data.data))
  }

  getCustomers(page, itemsPerPage): Observable<Customer[]> {
    let params = new HttpParams()
      .set('page', page)
      .set('itemsPerPage', itemsPerPage);
    return this.dataService.get<Customer[]>(`/api/customers`, params).pipe(map((data) => data.data))
  }

  getCustomersCount(): Observable<number> {
    return this.dataService.get<number>(`/api/customers/count`).pipe(map((data) => data.data));
  }

  save(customer: Customer): Observable<Customer> {
    return this.dataService.post<Customer>('/api/customers', customer).pipe(map((data) => data.data));
  }

  public getCustomerByField(fieldType: string, fieldValue: any): Observable<Customer> {
    let params = new HttpParams()
      .set("fieldName", fieldType)
      .set('value', fieldValue);

    return this.dataService.get<Customer>(`/api/customers/unique`, params).pipe(map((data) => data.data));
  }

  public deleteCustomers(ids: number[]): Observable<ServerResp<any>> {
    let params = new HttpParams();
    ids.forEach(id => params = params.append('ids', `${id}`));
    return this.dataService.post('/api/customers/delete', params);
  }
}
