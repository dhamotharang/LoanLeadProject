import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AdminNavigationComponent} from "./admin-navigation.component";
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [AdminNavigationComponent],
  exports: [
    AdminNavigationComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class AdminNavigationModule { }
