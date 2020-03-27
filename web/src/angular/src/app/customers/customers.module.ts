import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from "@angular/forms";
import {AdminNavigationModule} from "../ui/admin-navigation/admin-navigation.module";
import {PaginationModule} from "../common/pagination/pagination.module";
import {RouterModule} from "@angular/router";
import {UserNavigationModule} from "../ui/user-navigation/user-navigation.module";
import {CustomersComponent} from "./customers.component";
import {CustomerFormComponent} from "./customer-form/customer-form.component";



@NgModule({
  declarations: [CustomersComponent, CustomerFormComponent],
  imports: [
    ReactiveFormsModule,
    UserNavigationModule,
    CommonModule,
    PaginationModule,
    RouterModule
  ]
})
export class CustomersModule { }
