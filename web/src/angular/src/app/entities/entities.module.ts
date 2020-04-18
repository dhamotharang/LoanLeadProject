import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {ReactiveFormsModule} from "@angular/forms";
import {EntitiesComponent} from "./entities.component";
import {NavigationModule} from "../ui/navigation/navigation.module";
import {PaginationModule} from "../common/pagination/pagination.module";
import {RouterModule} from "@angular/router";
import {EntityFormComponent} from "./entity-form/entity-form.component";
import {NgxSpinnerModule} from "ngx-spinner";

@NgModule({
  declarations: [EntitiesComponent, EntityFormComponent],
    imports: [
        ReactiveFormsModule,
        NavigationModule,
        CommonModule,
        PaginationModule,
        RouterModule,
        NgxSpinnerModule
    ],
})
export class EntitiesModule {
}
