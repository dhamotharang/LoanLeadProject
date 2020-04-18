import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from "@angular/forms";
import {NavigationModule} from "../ui/navigation/navigation.module";
import {PaginationModule} from "../common/pagination/pagination.module";
import {RouterModule} from "@angular/router";
import {LoanProductsComponent} from "./loan-products.component";
import {LoanProductFormComponent} from "./loan-product-form/loan-product-form.component";
import {NgxSpinnerModule} from "ngx-spinner";



@NgModule({
  declarations: [LoanProductsComponent, LoanProductFormComponent],
    imports: [
        ReactiveFormsModule,
        NavigationModule,
        CommonModule,
        PaginationModule,
        RouterModule,
        NgxSpinnerModule
    ]
})
export class LoanProductsModule { }
