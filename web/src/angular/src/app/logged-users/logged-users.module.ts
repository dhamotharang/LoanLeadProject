import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from "@angular/forms";
import {NavigationModule} from "../ui/navigation/navigation.module";
import {RouterModule} from "@angular/router";
import {LoggedUsersComponent} from "./logged-users.component";
import {NgxSpinnerModule} from "ngx-spinner";

@NgModule({
  declarations: [LoggedUsersComponent],
    imports: [
        ReactiveFormsModule,
        NavigationModule,
        CommonModule,
        RouterModule,
        NgxSpinnerModule
    ]
})
export class LoggedUsersModule { }
