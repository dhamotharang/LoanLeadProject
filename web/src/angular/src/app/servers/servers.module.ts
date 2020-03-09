import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ServersComponent} from './servers.component';
import {ComponentRegistryService} from "../core/services/components/component-registry.service";
import {AddServerComponent} from './add-server/add-server.component';
import {FormsModule} from "@angular/forms";
import {ServerComponent} from './server/server.component';
import {AddServerProductComponent} from './add-server-product/add-server-product.component';
import {CheckboxModule} from "primeng";
import {UiModule} from "../ui/ui.module";

@NgModule({
  declarations: [ServersComponent, AddServerComponent, ServerComponent, AddServerProductComponent],
  imports: [
    CommonModule,
    FormsModule,
    CheckboxModule,
    UiModule
  ]
})
export class ServersModule {
  constructor(private componentRegistryService: ComponentRegistryService) {
    this.componentRegistryService.define('eim-servers', ServersComponent);
    this.componentRegistryService.define('eim-add-server', AddServerComponent);
    this.componentRegistryService.define('eim-add-server-product', AddServerProductComponent);
  }
}
