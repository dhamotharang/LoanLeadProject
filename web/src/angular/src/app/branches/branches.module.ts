import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {ReactiveFormsModule} from "@angular/forms";
import {BranchesComponent} from "./branches.component";
import {NavigationModule} from "../ui/navigation/navigation.module";
import {PaginationModule} from "../common/pagination/pagination.module";
import {RouterModule} from "@angular/router";
import {BranchFormComponent} from "./branch-form/branch-form.component";

@NgModule({
  declarations: [BranchesComponent, BranchFormComponent],
  imports: [
    ReactiveFormsModule,
    NavigationModule,
    CommonModule,
    PaginationModule,
    RouterModule
  ],
})
export class BranchesModule {
}
