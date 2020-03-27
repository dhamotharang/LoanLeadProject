import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {LoanService} from '../core/services/loan.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import * as $ from 'jquery';
import {User} from '../model/user';
import {UserService} from '../core/services/user.service';
import {Loan} from '../model/loan';
import {ReportForm} from '../model/ui/components/report-form';
import {Branch} from '../model/branch';
import {Role} from '../model/role';
import {BranchService} from '../core/services/branch.service';
import {Report} from "../model/report";

@Component({
  selector: 'eim-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent implements OnInit {
  formGroup: FormGroup = new FormGroup({
    startDate: new FormControl('', [Validators.required]),
    endDate: new FormControl('', [Validators.required]),
    reportType: new FormControl(''),
    itemsCount: new FormControl('5', [Validators.required, Validators.min(5), Validators.max(20)])
  });

  loansCount$: Observable<number>;
  loans$: Observable<Loan[]>;
  comprehensiveLoans$: Observable<Report[]>;
  currentPage: number;

  entities: { id: number, name: string }[];
  userBranches: string[];

  constructor(
    private fb: FormBuilder,
    private loanService: LoanService,
    private branchService: BranchService,
    private userService: UserService
  ) {
    this.entities = [];
    this.userBranches = [];
  }

  ngOnInit(): void {
  }

  validate(): boolean {
    let result = true;
    const controls = this.formGroup.controls;

    Object.keys(controls).forEach((controlName) => {
      result = this.validateFormControl(controlName);
    });

    return result;
  }

  validateFormControl(controlName: string): boolean {
    console.log(controlName);
    let result = true;
    const control = this.formGroup.get(controlName);
    const input = document.getElementById(controlName);
    const labelSpan = document
      .querySelector(`#${controlName} + .feedback`);

    input.classList[control.errors ? 'add' : 'remove']('invalid');
    let textContent = '';

    if (control.errors) {
      result = false;

      Object.keys(control.errors).forEach((error) => {
        switch (error) {
          case 'required':
            textContent = 'Please, enter this field';
            break;
          case 'min':
            textContent = 'Please, provide higher value';
            break;
          case 'max':
            textContent = 'Please, provide lower value';
            break;
          default:
            textContent = '';
            break;
        }
      });
    }

    labelSpan.textContent = textContent;

    return result;
  }

  reportTypeUpdate() {
    this.entities = [];
    switch (this.formGroup.get('reportType').value) {
      case 'user':
        this.userService.getAllUsers().subscribe((users: User[]) => this.entities = users.map((user: User) => ({
          id: user.id,
          name: user.fullName
        })));
        break;
      case 'branch':
        this.branchService.getAllBranches().subscribe((branches: Branch[]) => this.entities = branches.map((branch: Branch) => ({
          id: branch.id,
          name: branch.name
        })));
        break;
      case 'stage':
        this.entities = [
          {id: 1, name: 'Application'},
          {id: 2, name: 'Branch Approval'},
          {id: 3, name: 'Branch Exit'},
          {id: 4, name: 'Regional Approval'},
          {id: 5, name: 'Head Office Entry'},
          {id: 6, name: 'Credit Analysis'},
          {id: 7, name: 'Head Office Approval'},
          {id: 8, name: 'Legal Review'},
          {id: 9, name: 'Loan Administration Entry'},
          {id: 10, name: 'Loan Administration Verification'},
          {id: 11, name: 'Loan Administration Exit'},
          {id: 12, name: 'Disbursement'},
        ];
    }
  }

  load(page: number) {
    this.currentPage = page;
    const reportForm: ReportForm = {
      startDate: this.formGroup.get('startDate').value,
      endDate: this.formGroup.get('endDate').value,
      reportType: this.formGroup.get('reportType').value,
      itemsPerPage: this.formGroup.get('itemsCount').value,
      page: this.currentPage ? this.currentPage - 1 : 0
    };

    if (document.getElementById('entityId')) {
      reportForm.entityId = Number.parseInt($('#entityId').val());
    }

    this.loadLoans(reportForm);
  }

  reload() {
    const reportForm: ReportForm = {
      startDate: this.formGroup.get('startDate').value,
      endDate: this.formGroup.get('endDate').value,
      reportType: this.formGroup.get('reportType').value,
      itemsPerPage: this.formGroup.get('itemsCount').value,
      page: this.currentPage ? this.currentPage - 1 : 0
    };

    if (document.getElementById('entityId')) {
      reportForm.entityId = Number.parseInt($('#entityId').val());
    }

    this.loans$ = null;
    this.comprehensiveLoans$ = null;
    this.loansCount$ = reportForm.reportType === 'comprehensive'
      ? this.loanService.getComprehensiveReportsCount(reportForm)
      : this.loanService.getReportsCount(reportForm);

    this.loadLoans(reportForm);
  }

  loadLoans(reportForm: ReportForm) {
    if (reportForm.reportType === 'comprehensive') {
      this.comprehensiveLoans$ = this.loanService.getComprehensiveReports(reportForm);
    } else {
      this.loans$ = this.loanService.getReports(reportForm);
    }
  }

  pagesCount(customersCount: number) {
    const result = customersCount / Number.parseInt(this.formGroup.get('itemsCount').value, 10);
    return Math.round(result) < result ? Math.round(result) + 1 : Math.round(result);
  }

  setUserBranches(branches: string[]) {
    this.userBranches = branches;
  }

  getItemsCount() {
    return this.formGroup.get('itemsCount').value;
  }

  reportLink() {
    let resultLink = '/api/reports/specific?';

    const fields: string[] = ['startDate', 'endDate', 'reportType'];
    resultLink += fields.map(field => field + '=' + this.formGroup.get(field).value).join('&');
    resultLink += '&itemsPerPage=' + this.formGroup.get('itemsCount').value;
    resultLink += '&page=' + (this.currentPage ? this.currentPage - 1 : 0);

    if (document.getElementById('entityId')) {
      resultLink += '&entityId=' + $('#entityId').val();
    }

    return resultLink;
  }

}
