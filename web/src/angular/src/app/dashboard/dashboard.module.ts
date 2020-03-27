import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from "@angular/forms";
import {UserNavigationModule} from "../ui/user-navigation/user-navigation.module";
import {PaginationModule} from "../common/pagination/pagination.module";
import {RouterModule} from "@angular/router";
import {DashboardComponent} from "./dashboard.component";
import {LoanFormComponent} from "./loan-form/loan-form.component";



@NgModule({
  declarations: [DashboardComponent, LoanFormComponent],
  imports: [
    ReactiveFormsModule,
    UserNavigationModule,
    CommonModule,
    PaginationModule,
    RouterModule
  ]
})
export class DashboardModule { }
