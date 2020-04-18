import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from "@angular/forms";
import {NavigationModule} from "../ui/navigation/navigation.module";
import {PaginationModule} from "../common/pagination/pagination.module";
import {RouterModule} from "@angular/router";
import {UsersComponent} from "./users.component";
import {UserFormComponent} from "./user-form/user-form.component";
import {NgxSpinnerModule} from "ngx-spinner";

@NgModule({
  declarations: [UsersComponent, UserFormComponent],
    imports: [
        ReactiveFormsModule,
        NavigationModule,
        CommonModule,
        PaginationModule,
        RouterModule,
        NgxSpinnerModule
    ]
})
export class UsersModule { }
