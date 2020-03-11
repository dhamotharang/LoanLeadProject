import { NgModule } from '@angular/core';
import {AdminHomeComponent} from "./admin-home.component";
import {AdminNavigationComponent} from "../ui/admin-navigation/admin-navigation.component";
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [AdminNavigationComponent, AdminHomeComponent],
  imports: [
    AdminHomeModule,
    CommonModule
  ]
})
export class AdminHomeModule { }
