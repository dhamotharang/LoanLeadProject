import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {WindowComponent} from './components/window/window.component';
import {CustomComponent} from './components/custom/custom.component';
import {SplitComponent} from './components/split/split.component';
import {MenuComponent} from './components/menu/menu.component';
import {TooltipComponent} from './components/tooltip/tooltip.component';
import {NavbarComponent} from './navigable/navbar/navbar.component';
import {EditorModule} from "./components/editor/editor.module";
import {ExternalComponent} from './components/external/external.component';
import {ExternalWindowComponent} from './components/external-window/external-window.component';
import {CustomTooltipComponent} from './components/custom-tooltip/custom-tooltip.component';
import {HeaderComponent} from './components/header/header.component';
import {FooterComponent} from './components/footer/footer.component';
import {OverlayPanelModule, SidebarModule} from "primeng";
import {PipesModule} from "./pipes/pipes.module";
import {IframeComponent} from './components/external/iframe/iframe.component';
import {WebComponent} from './components/external/web/web.component';
import {NavigableComponent} from './navigable/navigable.component';
import {RouterModule} from "@angular/router";
import {WindowContentComponent} from './components/window-content/window-content.component';
import {ExternalConfigurationComponent} from './components/external-configuration/external-configuration.component';

@NgModule({
  declarations: [
    WindowComponent,
    CustomComponent,
    SplitComponent,
    MenuComponent,
    TooltipComponent,
    NavbarComponent,
    ExternalComponent,
    ExternalWindowComponent,
    CustomTooltipComponent,
    HeaderComponent,
    FooterComponent,
    IframeComponent,
    WebComponent,
    NavigableComponent,
    WindowContentComponent,
    ExternalConfigurationComponent
  ],
  exports: [
    CustomComponent,
    NavbarComponent,
    ExternalWindowComponent
  ],
  imports: [
    CommonModule,
    EditorModule,
    SidebarModule,
    OverlayPanelModule,
    PipesModule,
    RouterModule
  ]
})
export class UiModule {
}
