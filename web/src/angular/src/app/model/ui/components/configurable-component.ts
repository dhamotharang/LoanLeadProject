import {EventEmitter} from "@angular/core";
import {EimUiConfigModel} from "../../eim-ui-config";

export interface ConfigurableComponentModel {
  component: EimUiConfigModel;
  configs: any;
  configsChange: EventEmitter<any>;
}
