import {Component, OnInit} from '@angular/core';
import {Entity} from "../model/entity";
import {Observable} from "rxjs";
import {EntityService} from "../core/services/entity.service";
import {FormControl, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {ServerResp} from "../model/server-resp";
import {NgxSpinnerService} from "ngx-spinner";

@Component({
  selector: 'loanlead-entities',
  templateUrl: './entities.component.html',
  styleUrls: ['./entities.component.scss']
})
export class EntitiesComponent implements OnInit {
  searchValue: FormControl = new FormControl('');
  itemsCount: FormControl = new FormControl(
    5,
    [
      Validators.required,
      Validators.min(5),
      Validators.max(20),
    ]);

  entitiesCount$: Observable<number>;
  entities$: Observable<Entity[]>;
  countChanged: boolean;
  selectAll: boolean;
  anySelected: boolean;
  entitiesToDelete: number[];

  constructor(private entityService: EntityService, private router: Router, private spinner: NgxSpinnerService) {
  }

  ngOnInit(): void {
    this.spinner.show();
    this.load(1);
    this.entitiesCount$ = this.entityService.getEntitiesCount();
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
    this.entities$ = this.entityService.getEntities(page - 1, this.itemsCount.value).pipe(entities => {
      this.spinner.hide();
      return entities;
    });
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

  pagesCount(entitiesCount: number) {
    let result = entitiesCount / this.itemsCount.value;
    return Math.round(result) < result ? Math.round(result) + 1 : Math.round(result);
  }

  selectAllTrigger(entities: Entity[]) {
    this.selectAll = !this.selectAll;
    if (this.selectAll) {
      this.entitiesToDelete = entities.map(entity => entity.id);
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
    this.entityService.deleteEntities(this.entitiesToDelete).subscribe((data: ServerResp<any>) => {
      if (data.err) {
        alert(`Request error with code ${data.err.status}`);
      } else {
        this.load(1);
        this.entitiesCount$ = this.entityService.getEntitiesCount();
      }
    })
  }
}
