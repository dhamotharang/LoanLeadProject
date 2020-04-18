import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from "@angular/forms";
import {NavigationModule} from "../ui/navigation/navigation.module";
import {PaginationModule} from "../common/pagination/pagination.module";
import {RouterModule} from "@angular/router";
import {DashboardComponent} from "./dashboard.component";
import {LoanFormComponent} from "./loan-form/loan-form.component";
import {NgxSpinnerModule} from "ngx-spinner";



@NgModule({
  declarations: [DashboardComponent, LoanFormComponent],
  imports: [
    ReactiveFormsModule,
    NavigationModule,
    CommonModule,
    PaginationModule,
    RouterModule,
    NgxSpinnerModule
  ]
})
export class DashboardModule { }
