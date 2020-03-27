import { Component, OnInit } from '@angular/core';
import {Loan} from "../model/loan";
import {Observable} from "rxjs";
import {LoanService} from "../core/services/loan.service";
import {FormControl, Validators} from "@angular/forms";
import {LoanCounts} from "../model/ui/components/loan-counts";
import {Router} from "@angular/router";
import {User} from "../model/user";
import {UserService} from "../core/services/user.service";

@Component({
  selector: 'eim-user-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  searchValue: FormControl = new FormControl('');
  itemsCount: FormControl = new FormControl(
    5,
    [
      Validators.required,
      Validators.min(5),
      Validators.max(20),
    ]);

  loansCount$: Observable<number>;
  loans$: Observable<Loan[]>;
  loanCounts$: Observable<LoanCounts>;
  currentUser$: Observable<User>;
  userBranches: string[];
  countChanged: boolean;

  constructor(private loanService: LoanService, private router: Router, private userService: UserService) { }

  ngOnInit(): void {
    this.currentUser$ = this.userService.getCurrentUser();
    this.loans$ = this.loanService.getMainPageLoans(0, 5);
    this.loansCount$ = this.loanService.getMainPageLoansCount();
    this.loanCounts$ = this.loanService.getMainLoansCount();
  }

  load(page: number) {
    this.loans$ = this.loanService.getMainPageLoans(page - 1, this.itemsCount.value);
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

  pagesCount(loansCount: number) {
    let result = loansCount / this.itemsCount.value;
    return Math.round(result) < result ? Math.round(result) + 1 : Math.round(result);
  }

  getTrColorClass(loan: Loan): string {
    if (this.difference(this.dateNow(), this.dateInstance(loan.createdAt).getTime()) > loan.loanProduct.timeThreshold) {
      return 'bg-danger';
    } else if (loan.status === 'Deferred') {
      return 'bg-warning'
    } else if (loan.role.id > 4) {
      return 'bg-pink';
    } else {
      return 'bg-success'
    }
  }

  getLinkClass(loan: Loan) {
    if (['bg-danger', 'bg-pink', 'bg-success'].includes(this.getTrColorClass(loan))) {
      return 'text-light';
    } else {
      return 'text-dark-blue';
    }
  }

  format(date: Date) {
    return ((date.getDate() < 10) ? '0' + date.getDate() : date.getDate()) +
      "/" + ((date.getMonth() < 10) ? '0' + (date.getMonth() + 1) : (date.getMonth() + 1)) +
      "/" + date.getFullYear() +
      " " + ((date.getHours() < 10) ? '0' + date.getHours() : date.getHours()) +
      ":" + ((date.getMinutes() < 10) ? '0' + date.getMinutes() : date.getMinutes()) +
      ":" + ((date.getSeconds() < 10) ? '0' + date.getSeconds() : date.getSeconds());
  }

  difference(firstDate: number, lastDate: number): number {
    let milliseconds = firstDate - lastDate;
    return Math.floor(milliseconds / 1000 / 3600 / 24);
  }

  age(firstDate: number, lastDate: number): string {
    let milliseconds = firstDate - lastDate;
    let hours = Math.floor(milliseconds / 1000 / 3600);
    let days = Math.floor(hours / 24);

    return days + " days " + (hours - days * 24) + " hours";
  }

  dateNow() {
    return Date.now();
  }

  dateInstance(date: string) {
    return new Date(date);
  }

  auditing(id: number) {
    this.router.navigate(['/user/auditing', id]);
  }

  modifyAmount(amount: string): string {
    return amount.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  setUserBranches(branches: string[]) {
    this.userBranches = branches;
  }
}
