import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from "@angular/forms";
import {AdminNavigationModule} from "../ui/admin-navigation/admin-navigation.module";
import {PaginationModule} from "../common/pagination/pagination.module";
import {RouterModule} from "@angular/router";
import {LoanProductsComponent} from "./loan-products.component";
import {LoanProductFormComponent} from "./loan-product-form/loan-product-form.component";



@NgModule({
  declarations: [LoanProductsComponent, LoanProductFormComponent],
  imports: [
    ReactiveFormsModule,
    AdminNavigationModule,
    CommonModule,
    PaginationModule,
    RouterModule
  ]
})
export class LoanProductsModule { }
