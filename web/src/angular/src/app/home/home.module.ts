import { NgModule } from '@angular/core';
import {HomeComponent} from './home.component';
import {CommonModule} from '@angular/common';
import {NavigationModule} from '../ui/navigation/navigation.module';
import {ReactiveFormsModule} from '@angular/forms';
import {PaginationModule} from '../common/pagination/pagination.module';
import {NgxSpinnerModule} from "ngx-spinner";

@NgModule({
  declarations: [HomeComponent],
    imports: [
        ReactiveFormsModule,
        NavigationModule,
        CommonModule,
        PaginationModule,
        NgxSpinnerModule
    ],
})
export class HomeModule { }
