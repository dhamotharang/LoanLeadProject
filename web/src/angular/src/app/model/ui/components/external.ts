import {ComponentModel} from "../../config-model";
import {EventEmitter} from "@angular/core";

export interface ExternalComponentModel {
  config: ComponentModel;
  configChange: EventEmitter<any>;
}
