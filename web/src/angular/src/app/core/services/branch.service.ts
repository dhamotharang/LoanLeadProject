import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {Branch} from "../../model/branch";
import {map} from "rxjs/operators";
import {DataService} from "./data.service";
import {ServerResp} from "../../model/server-resp";
import {Entity} from "../../model/entity";

@Injectable({
  providedIn: 'root'
})
export class BranchService {

  constructor(
    private http: HttpClient,
    private dataService: DataService
  ) { }

  getBranch(id: number) {
    return this.dataService.get<Branch>(`/api/branches/${id}`).pipe(map((data) => data.data));
  }

  getBranches(page, itemsPerPage): Observable<Branch[]> {
    let params = new HttpParams()
      .set('page', page)
      .set('itemsPerPage', itemsPerPage);
    return this.dataService.get<Branch[]>(`/api/branches`, params).pipe(map((data) => data.data))
  }

  getBranchesCount(): Observable<number> {
    return this.dataService.get<number>(`/api/branches/count`).pipe(map((data) => data.data));
  }

  getAllBranches(): Observable<Branch[]> {
    return this.dataService.get<Branch[]>(`/api/branches/all`).pipe(map((data) => data.data));
  }

  save(branch: Branch): Observable<Branch> {
    return this.dataService.post<Branch>(`/api/branches`, branch).pipe(map((data) => data.data));
  }

  public getBranchByField(fieldType: string, fieldValue: any): Observable<Branch> {
    let params = new HttpParams()
      .set('fieldName', fieldType)
      .set('value', fieldValue);

    return this.dataService.get<Branch>(`/api/branches/unique`, params).pipe(map((data) => data.data));
  }

  public deleteBranches(ids: number[]): Observable<ServerResp<any>> {
    let params = new HttpParams();
    ids.forEach(id => params = params.append('ids', `${id}`));
    return this.dataService.post('/api/branches/delete', params);
  }
}
