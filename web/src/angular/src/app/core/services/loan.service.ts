import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Loan} from '../../model/loan';
import {map} from 'rxjs/operators';
import {DataService} from './data.service';
import {LoanCounts} from '../../model/ui/components/loan-counts';
import {ReportForm} from '../../model/ui/components/report-form';
import {Report} from "../../model/report";

@Injectable({
  providedIn: 'root'
})
export class LoanService {

  constructor(
    private http: HttpClient,
    private dataService: DataService
  ) {
  }

  getMainPageLoans(page, itemsPerPage): Observable<Loan[]> {
    const params = new HttpParams()
      .set('page', page)
      .set('itemsPerPage', itemsPerPage);
    return this.dataService.get<Loan[]>(`/api/loans/main`, params).pipe(map((data) => data.data));
  }

  getMainPageLoansCount(): Observable<number> {
    return this.dataService.get<number>(`/api/loans/main/count`).pipe(map((data) => data.data));
  }

  getMainLoansCount(): Observable<LoanCounts> {
    return this.dataService.get<LoanCounts>(`/api/main/count`).pipe(map((data) => data.data));
  }

  getReports(reportForm: ReportForm) {
    let params: HttpParams = new HttpParams();
    for (const reportFormKey of Object.keys(reportForm)) {
      params = params.append(reportFormKey, reportForm[reportFormKey]);
    }

    return this.dataService.get<Loan[]>(`/api/loans/reports`, params).pipe(map((data) => data.data));
  }

  getReportsCount(reportForm: ReportForm) {
    let params: HttpParams = new HttpParams();
    for (const reportFormKey of Object.keys(reportForm)) {
      params = params.append(reportFormKey, reportForm[reportFormKey]);
    }

    return this.dataService.get<number>(`/api/loans/reports/count`, params).pipe(map((data) => data.data));
  }

  getComprehensiveReports(reportForm: ReportForm): Observable<Report[]> {
    let params: HttpParams = new HttpParams();
    for (const reportFormKey of Object.keys(reportForm)) {
      params = params.append(reportFormKey, reportForm[reportFormKey]);
    }

    return this.dataService.get<Report[]>(`/api/loans/comprehensive/report`, params).pipe(map((data) => data.data));
  }

  getComprehensiveReportsCount(reportForm: ReportForm): Observable<number> {
    let params: HttpParams = new HttpParams();
    for (const reportFormKey of Object.keys(reportForm)) {
      params = params.append(reportFormKey, reportForm[reportFormKey]);
    }

    return this.dataService.get<number>(`/api/loans/comprehensive/report/count`, params).pipe(map((data) => data.data));
  }

  getForwardedLoans(): Observable<Loan[]> {
    return this.dataService.get<Loan[]>(`/api/loans/forwarded`).pipe(map((data) => data.data));
  }

  getReceivedLoans(): Observable<Loan[]> {
    return this.dataService.get<Loan[]>(`/api/loans/received`).pipe(map((data) => data.data));
  }

  receiveLoan(loanId: number): Observable<Loan> {
    return this.dataService.get<Loan>(`/api/loans/receive/${loanId}`).pipe(map((data) => data.data));
  }

  save(loan: Loan): Observable<Loan> {
    return this.dataService.post<Loan>(`/api/loans`, loan).pipe(map((data) => data.data));
  }

  find(loanId: number): Observable<Loan> {
    return this.dataService.get<Loan>(`/api/loans/${loanId}`).pipe(map(data => data.data));
  }
}
