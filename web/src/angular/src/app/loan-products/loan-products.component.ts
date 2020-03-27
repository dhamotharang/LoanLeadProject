import {AfterContentInit, Component, OnChanges, OnInit} from '@angular/core';
import {LoanProduct} from "../model/loan-product";
import {Observable} from "rxjs";
import {LoanProductService} from "../core/services/loan-product.service";
import {FormControl, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import * as $ from 'jquery';
import {Entity} from "../model/entity";
import {ServerResp} from "../model/server-resp";

@Component({
  selector: 'eim-loan-products',
  templateUrl: './loan-products.component.html',
  styleUrls: ['./loan-products.component.scss']
})
export class LoanProductsComponent implements OnInit {
  searchValue: FormControl = new FormControl('');
  itemsCount: FormControl = new FormControl(
    5,
    [
      Validators.required,
      Validators.min(5),
      Validators.max(20),
    ]);

  loanProductsCount$: Observable<number>;
  loanProducts$: Observable<LoanProduct[]>;
  countChanged: boolean;
  selectAll: boolean;
  anySelected: boolean;
  entitiesToDelete: number[];

  constructor(private loanProductService: LoanProductService, private router: Router) { }

  ngOnInit(): void {
    this.load(1);
    this.loanProductsCount$ = this.loanProductService.getLoanProductsCount();
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
    this.loanProducts$ = this.loanProductService.getLoanProducts(page - 1, this.itemsCount.value);
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

  pagesCount(loanProductsCount: number) {
    let result = loanProductsCount / this.itemsCount.value;
    return Math.round(result) < result ? Math.round(result) + 1 : Math.round(result);
  }

  selectAllTrigger(loanProducts: LoanProduct[]) {
    this.selectAll = !this.selectAll;
    if (this.selectAll) {
      this.entitiesToDelete = loanProducts.map(loanProduct => loanProduct.id);
    } else {
      this.entitiesToDelete = [];
    }
    this.anySelected = this.selectAll;
  }

  delete() {
    this.loanProductService.deleteLoanProducts(this.entitiesToDelete).subscribe((data: ServerResp<any>) => {
      if (data.err) {
        alert(`Request error with code ${data.err.status}`);
      } else {
        this.load(1);
        this.loanProductsCount$ = this.loanProductService.getLoanProductsCount();
      }
    })
  }
}
