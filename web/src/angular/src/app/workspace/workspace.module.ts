import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {WorkspaceComponent} from './workspace.component';
import {UiModule} from "../ui/ui.module";

@NgModule({
  declarations: [WorkspaceComponent],
  imports: [
    CommonModule,
    UiModule
  ]
})
export class WorkspaceModule {
}
