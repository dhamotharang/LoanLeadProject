import {AfterContentInit, Component, OnChanges, OnInit} from '@angular/core';
import {Branch} from "../model/branch";
import {Observable} from "rxjs";
import {BranchService} from "../core/services/branch.service";
import {FormControl, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import * as $ from 'jquery';
import {ServerResp} from "../model/server-resp";

@Component({
  selector: 'loanlead-branches',
  templateUrl: './branches.component.html',
  styleUrls: ['./branches.component.scss']
})
export class BranchesComponent implements OnInit {
  searchValue: FormControl = new FormControl('');
  itemsCount: FormControl = new FormControl(
    5,
    [
      Validators.required,
      Validators.min(5),
      Validators.max(20),
    ]);

  branchesCount$: Observable<number>;
  branches$: Observable<Branch[]>;
  countChanged: boolean;
  selectAll: boolean;
  anySelected: boolean;
  entitiesToDelete: number[];

  constructor(private branchService: BranchService, private router: Router) { }

  ngOnInit(): void {
    this.load(1);
    this.branchesCount$ = this.branchService.getBranchesCount();
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
    this.branches$ = this.branchService.getBranches(page - 1, this.itemsCount.value);
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

  pagesCount(branchesCount: number) {
    let result = branchesCount / this.itemsCount.value;
    return Math.round(result) < result ? Math.round(result) + 1 : Math.round(result);
  }

  selectAllTrigger(branches: Branch[]) {
    this.selectAll = !this.selectAll;
    if (this.selectAll) {
      this.entitiesToDelete = branches.map(branch => branch.id);
    } else {
      this.entitiesToDelete = [];
    }
    this.anySelected = this.selectAll;
  }

  format(date: Date) {
    return ((date.getDate() < 10) ? '0' + date.getDate() : date.getDate()) +
      "/" + ((date.getMonth() < 10) ? '0' + (date.getMonth() + 1) : (date.getMonth() + 1)) +
      "/" + date.getFullYear() +
      " " + ((date.getHours() < 10) ? '0' + date.getHours() : date.getHours()) +
      ":" + ((date.getMinutes() < 10) ? '0' + date.getMinutes() : date.getMinutes()) +
      ":" + ((date.getSeconds() < 10) ? '0' + date.getSeconds() : date.getSeconds());
  }

  dateInstance(date: string) {
    return new Date(date);
  }

  delete() {
    this.branchService.deleteBranches(this.entitiesToDelete).subscribe((data: ServerResp<any>) => {
      if (data.err) {
        alert(`Request error with code ${data.err.status}`);
      } else {
        this.load(1);
        this.branchesCount$ = this.branchService.getBranchesCount();
      }
    })
  }
}
