import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SidebarComponent} from './sidebar.component';
import {ComponentRegistryService} from "../core/services/components/component-registry.service";
import {AccordionModule, TableModule} from "primeng";
import {SidebarProductsComponent} from './sidebar-products/sidebar-products.component';

@NgModule({
  declarations: [SidebarComponent, SidebarProductsComponent],
  imports: [
    CommonModule,
    AccordionModule,
    TableModule
  ]
})
export class SidebarModule {
  constructor(private componentRegistryService: ComponentRegistryService) {
    this.componentRegistryService.define('eim-sidebar', SidebarComponent);
    this.componentRegistryService.define('eim-sidebar-products', SidebarProductsComponent);
  }
}
