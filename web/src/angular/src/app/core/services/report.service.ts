import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {DataService} from "./data.service";
import {Report} from "../../model/report";
import {map} from "rxjs/operators";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  constructor(
    private http: HttpClient,
    private dataService: DataService
  ) {
  }

  getReportsByLoanId(loanId: number, page: number, itemsPerPage: number): Observable<Report[]> {
    const params = new HttpParams()
      .append('page', page.toString())
      .append('itemsPerPage', itemsPerPage.toString());

    return this.dataService.get<Report[]>(`/api/reports/${loanId}`, params).pipe(map(data => data.data));
  }

  getReportsByLoanIdCount(loanId: number): Observable<number> {
    return this.dataService.get<number>(`/api/reports/${loanId}/count`).pipe(map(data => data.data));
  }

  report(loanId: number, page: number, itemsPerPage: number) {
    const params = new HttpParams()
      .append('loanId', loanId.toString())
      .append('page', page.toString())
      .append('itemsPerPage', itemsPerPage.toString());

    this.dataService.get(`/api/reports/report`, params);
  }
}
