import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ResourcesComponent} from './resources.component';
import {ComponentRegistryService} from "../core/services/components/component-registry.service";
import {AddResourceComponent} from './add-resource/add-resource.component';
import {CheckboxModule, MenuModule} from "primeng";
import {UiModule} from "../ui/ui.module";
import {FormsModule} from "@angular/forms";
import {PipesModule} from "../ui/pipes/pipes.module";

@NgModule({
  declarations: [ResourcesComponent, AddResourceComponent],
  imports: [
    CommonModule,
    MenuModule,
    UiModule,
    CheckboxModule,
    FormsModule,
    PipesModule
  ]
})
export class ResourcesModule {
  constructor(private componentRegistryService: ComponentRegistryService) {
    this.componentRegistryService.define('eim-resources', ResourcesComponent);
    this.componentRegistryService.define('eim-add-resource', AddResourceComponent);
  }
}
