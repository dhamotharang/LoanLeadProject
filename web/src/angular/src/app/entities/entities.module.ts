import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {ReactiveFormsModule} from "@angular/forms";
import {EntitiesComponent} from "./entities.component";
import {AdminNavigationModule} from "../ui/admin-navigation/admin-navigation.module";
import {PaginationModule} from "../common/pagination/pagination.module";
import {RouterModule} from "@angular/router";
import {EntityFormComponent} from "./entity-form/entity-form.component";

@NgModule({
  declarations: [EntitiesComponent, EntityFormComponent],
  imports: [
    ReactiveFormsModule,
    AdminNavigationModule,
    CommonModule,
    PaginationModule,
    RouterModule
  ],
})
export class EntitiesModule {
}
