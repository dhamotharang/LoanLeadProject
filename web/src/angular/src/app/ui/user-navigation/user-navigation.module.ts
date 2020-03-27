import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserNavigationComponent} from "./user-navigation.component";
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [UserNavigationComponent],
  exports: [
    UserNavigationComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class UserNavigationModule { }
