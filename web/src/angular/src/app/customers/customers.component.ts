import {Component, OnInit} from '@angular/core';
import {Customer} from '../model/customer';
import {Observable} from 'rxjs';
import {CustomerService} from '../core/services/customer.service';
import {FormControl, Validators} from '@angular/forms';
import * as $ from 'jquery';
import {User} from '../model/user';
import {UserService} from '../core/services/user.service';
import {Loan} from '../model/loan';
import {ServerResp} from '../model/server-resp';
import {Branch} from "../model/branch";

@Component({
  selector: 'eim-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {
  searchValue: FormControl = new FormControl('');
  itemsCount: FormControl = new FormControl(
    5,
    [
      Validators.required,
      Validators.min(5),
      Validators.max(20),
    ]);

  customersCount$: Observable<number>;
  customers$: Observable<Customer[]>;
  currentUser$: Observable<User>;
  customerLoans: Loan[];
  userBranches: string[];
  countChanged: boolean;
  selectAll: boolean;
  anySelected: boolean;
  entitiesToDelete: number[];

  constructor(private customerService: CustomerService, private userService: UserService) {
  }

  ngOnInit(): void {
    this.load(1);
    this.customersCount$ = this.customerService.getCustomersCount();
    this.currentUser$ = this.userService.getCurrentUser();
    this.selectAll = false;
    this.entitiesToDelete = [];
  }

  check(id?: number): void {
    if (id) {
      if (this.entitiesToDelete.includes(id)) {
        this.entitiesToDelete.splice(this.entitiesToDelete.indexOf(id), 1);
      } else {
        this.entitiesToDelete.push(id);
      }
    }
    this.anySelected = this.entitiesToDelete.length > 0;
  }

  load(page: number) {
    this.customers$ = this.customerService.getCustomers(page - 1, this.itemsCount.value);
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

  pagesCount(customersCount: number) {
    const result = customersCount / this.itemsCount.value;
    return Math.round(result) < result ? Math.round(result) + 1 : Math.round(result);
  }

  selectAllTrigger(customers: Customer[]) {
    this.selectAll = !this.selectAll;
    if (this.selectAll) {
      this.entitiesToDelete = customers.map(customer => customer.id);
    } else {
      this.entitiesToDelete = [];
    }
    this.anySelected = this.selectAll;
  }

  format(date: Date) {
    return ((date.getDate() < 10) ? '0' + date.getDate() : date.getDate()) +
      '/' + ((date.getMonth() < 10) ? '0' + (date.getMonth() + 1) : (date.getMonth() + 1)) +
      '/' + date.getFullYear() +
      ' ' + ((date.getHours() < 10) ? '0' + date.getHours() : date.getHours()) +
      ':' + ((date.getMinutes() < 10) ? '0' + date.getMinutes() : date.getMinutes()) +
      ':' + ((date.getSeconds() < 10) ? '0' + date.getSeconds() : date.getSeconds());
  }

  dateInstance(date: string) {
    return new Date(date);
  }

  setCustomerLoans(customer: Customer) {
    this.customerLoans = customer.loans;
  }

  setUserBranches(branches: string[]) {
    this.userBranches = branches;
  }

  delete() {
    this.customerService.deleteCustomers(this.entitiesToDelete).subscribe((data: ServerResp<any>) => {
      if (data.err) {
        alert(`Request error with code ${data.err.status}`);
      } else {
        this.load(1);
        this.customersCount$ = this.customerService.getCustomersCount();
      }
    });
  }
}
