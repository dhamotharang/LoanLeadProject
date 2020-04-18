import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {NavigationModule} from '../ui/navigation/navigation.module';
import {PaginationModule} from '../common/pagination/pagination.module';
import {RouterModule} from '@angular/router';
import {ReportsComponent} from './reports.component';
import {NgxSpinnerModule} from "ngx-spinner";

@NgModule({
  declarations: [ReportsComponent],
    imports: [
        ReactiveFormsModule,
        NavigationModule,
        CommonModule,
        PaginationModule,
        RouterModule,
        NgxSpinnerModule
    ]
})
export class ReportsModule { }
