import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {Urls} from "./config/routes/constants";
import {ServersComponent} from "./servers/servers.component";
import {WorkspaceComponent} from "./workspace/workspace.component";
import {SidebarComponent} from "./sidebar/sidebar.component";
import {LogsComponent} from "./logs/logs.component";
import {ResourcesComponent} from "./resources/resources.component";
import {EnvironmentComponent} from "./environment/environment.component";
import {NavigableComponent} from "./ui/navigable/navigable.component";

const componentRoutes: Routes = [
  {path: Urls.WORKSPACE, component: WorkspaceComponent, pathMatch: 'full'},
  {path: Urls.SERVERS, component: ServersComponent, pathMatch: 'full'},
  {path: Urls.RESOURCES, component: ResourcesComponent, pathMatch: 'full'},
  {path: Urls.SIDEBAR, component: SidebarComponent, pathMatch: 'full'},
  {path: Urls.LOGS, component: LogsComponent, pathMatch: 'full'},
  {path: Urls.ENVIRONMENT_SETTINGS, component: EnvironmentComponent, pathMatch: 'full'}
];

const navRoutes: Routes = [
  {
    path: Urls.NAV,
    component: NavigableComponent,
    children: [
      {path: '', redirectTo: Urls.WORKSPACE, pathMatch: 'full'},
      ...componentRoutes
    ]
  },
];

const routes: Routes = [
  {path: '', redirectTo: Urls.NAV, pathMatch: 'full'},
  ...navRoutes,
  ...componentRoutes
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
