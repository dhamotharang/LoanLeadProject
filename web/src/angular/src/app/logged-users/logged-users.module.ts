import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from "@angular/forms";
import {AdminNavigationModule} from "../ui/admin-navigation/admin-navigation.module";
import {RouterModule} from "@angular/router";
import {LoggedUsersComponent} from "./logged-users.component";

@NgModule({
  declarations: [LoggedUsersComponent],
  imports: [
    ReactiveFormsModule,
    AdminNavigationModule,
    CommonModule,
    RouterModule
  ]
})
export class LoggedUsersModule { }
