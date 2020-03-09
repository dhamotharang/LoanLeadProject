import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EnvironmentSettingsComponent} from './environment-settings/environment-settings.component';
import {UiModule} from "../ui/ui.module";
import {EnvironmentComponent} from './environment.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [EnvironmentSettingsComponent, EnvironmentComponent],
  imports: [
    CommonModule,
    UiModule,
    FormsModule
  ]
})
export class EnvironmentModule {
}
