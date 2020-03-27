import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {AdminNavigationModule} from '../ui/admin-navigation/admin-navigation.module';
import {PaginationModule} from '../common/pagination/pagination.module';
import {RouterModule} from '@angular/router';
import {ReportsComponent} from './reports.component';

@NgModule({
  declarations: [ReportsComponent],
  imports: [
    ReactiveFormsModule,
    AdminNavigationModule,
    CommonModule,
    PaginationModule,
    RouterModule
  ]
})
export class ReportsModule { }
