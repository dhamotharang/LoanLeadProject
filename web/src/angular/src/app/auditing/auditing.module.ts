import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from "@angular/forms";
import {NavigationModule} from "../ui/navigation/navigation.module";
import {PaginationModule} from "../common/pagination/pagination.module";
import {RouterModule} from "@angular/router";
import {AuditingComponent} from "./auditing.component";



@NgModule({
  declarations: [AuditingComponent],
  imports: [
    ReactiveFormsModule,
    NavigationModule,
    CommonModule,
    PaginationModule,
    RouterModule
  ]
})
export class AuditingModule { }
