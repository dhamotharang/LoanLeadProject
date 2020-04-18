import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {NavigationModule} from '../ui/navigation/navigation.module';
import {PaginationModule} from '../common/pagination/pagination.module';
import {RouterModule} from '@angular/router';
import {CustomersComponent} from './customers.component';
import {CustomerFormComponent} from './customer-form/customer-form.component';
import {NgxSpinnerModule} from "ngx-spinner";



@NgModule({
  declarations: [CustomersComponent, CustomerFormComponent],
  imports: [
    ReactiveFormsModule,
    NavigationModule,
    CommonModule,
    PaginationModule,
    RouterModule,
    NgxSpinnerModule
  ]
})
export class CustomersModule { }
