import { NgModule } from '@angular/core';
import {HomeComponent} from "./home.component";
import {CommonModule} from "@angular/common";
import {UserNavigationModule} from "../ui/user-navigation/user-navigation.module";
import {ReactiveFormsModule} from "@angular/forms";
import {PaginationModule} from "../common/pagination/pagination.module";
import {AdminNavigationModule} from "../ui/admin-navigation/admin-navigation.module";

@NgModule({
  declarations: [HomeComponent],
  imports: [
    ReactiveFormsModule,
    AdminNavigationModule,
    UserNavigationModule,
    CommonModule,
    PaginationModule
  ],
})
export class HomeModule { }
