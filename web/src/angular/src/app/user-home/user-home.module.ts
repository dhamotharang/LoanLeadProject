import { NgModule } from '@angular/core';
import {UserHomeComponent} from "./user-home.component";
import {CommonModule} from "@angular/common";
import {UserNavigationComponent} from "../ui/user-navigation/user-navigation.component";

@NgModule({
  declarations: [UserHomeComponent, UserNavigationComponent],
  imports: [
    CommonModule
  ]
})
export class UserHomeModule { }
