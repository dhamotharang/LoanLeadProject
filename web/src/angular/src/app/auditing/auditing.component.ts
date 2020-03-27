import {Component, OnInit} from '@angular/core';
import {Report} from "../model/report";
import {Observable} from "rxjs";
import {ReportService} from "../core/services/report.service";
import {FormControl, Validators} from "@angular/forms";
import {ActivatedRoute, ParamMap} from "@angular/router";

@Component({
  selector: 'eim-auditing',
  templateUrl: './auditing.component.html',
  styleUrls: ['./auditing.component.scss']
})
export class AuditingComponent implements OnInit {
  loanId: number;
  reportsCount$: Observable<number>;
  reports$: Observable<Report[]>;
  userBranches: string[];
  itemsCount: FormControl = new FormControl(
    5,
    [
      Validators.required,
      Validators.min(5),
      Validators.max(20),
    ]);
  countChanged: boolean;
  currentPage: number;

  constructor(
    private reportService: ReportService,
    private activatedRoute: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.loanId = Number.parseInt(paramMap.get('loanId'), 10);

      this.load(1);
      this.reportsCount$ = this.reportService.getReportsByLoanIdCount(this.loanId);
    });
  }

  load(page: number) {
    this.reports$ = this.reportService.getReportsByLoanId(this.loanId, page - 1, this.itemsCount.value);
    this.currentPage = page;
  }

  validate() {
    const input = document.getElementById('itemsCount');
    const labelSpan = document.querySelector('#itemsCount + .feedback');

    input.classList[this.itemsCount.errors ? 'add' : 'remove']('invalid');
    let textContent = '';

    if (this.itemsCount.errors) {
      Object.keys(this.itemsCount.errors).forEach((error) => {
        switch (error) {
          case 'required':
            textContent = 'Please, enter this field';
            break;
          case 'min':
            textContent = 'Please, enter higher number';
            break;
          case 'max':
            textContent = 'Please, enter lower number';
            break;
          default:
            textContent = '';
            break;
        }
      });
    }
    labelSpan.textContent = textContent;
    this.countChanged = true;
  }

  filter() {
    if (!this.itemsCount.errors && this.countChanged) {
      const page = 1;
      this.load(page);
      this.countChanged = false;
    }
  }

  pagesCount(reportsCount: number) {
    const result = reportsCount / this.itemsCount.value;
    return Math.round(result) < result ? Math.round(result) + 1 : Math.round(result);
  }

  setUserBranches(branches: string[]) {
    this.userBranches = branches;
  }

  reportLink() {
    return `/api/reports/report?loanId=${this.loanId}&page=${this.currentPage ? this.currentPage - 1 : 0}&itemsPerPage=${this.itemsCount.value}`;
  }

}
