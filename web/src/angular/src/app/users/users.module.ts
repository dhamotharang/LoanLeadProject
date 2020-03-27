import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from "@angular/forms";
import {AdminNavigationModule} from "../ui/admin-navigation/admin-navigation.module";
import {PaginationModule} from "../common/pagination/pagination.module";
import {RouterModule} from "@angular/router";
import {UsersComponent} from "./users.component";
import {UserFormComponent} from "./user-form/user-form.component";

@NgModule({
  declarations: [UsersComponent, UserFormComponent],
  imports: [
    ReactiveFormsModule,
    AdminNavigationModule,
    CommonModule,
    PaginationModule,
    RouterModule
  ]
})
export class UsersModule { }
