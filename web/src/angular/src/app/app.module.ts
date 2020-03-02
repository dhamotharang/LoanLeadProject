import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {WorkspaceModule} from "./workspace/workspace.module";
import {ServersModule} from "./servers/servers.module";
import {ResourcesModule} from "./resources/resources.module";
import {SidebarModule} from "./sidebar/sidebar.module";
import {LogsModule} from "./logs/logs.module";
import {HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {EnvironmentModule} from "./environment/environment.module";
import { EntitiesComponent } from './entities/entities.component';

@NgModule({
  declarations: [
    AppComponent,
    EntitiesComponent
  ],
  imports: [
    EntitiesComponent,
    BrowserModule,
    AppRoutingModule,
    WorkspaceModule,
    ServersModule,
    ResourcesModule,
    SidebarModule,
    EnvironmentModule,
    LogsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
