import {EventEmitter} from "@angular/core";
import {HeaderConfig} from "./ui/components/header";
import {FooterConfig} from "./ui/components/footer";
import {EimComponentModel} from "./component";

export interface DynamicComponent {
  hide: EventEmitter<any>;
  show(): void;
  config: ExternalActionMessage;
}

export enum DynamicComponentType {
  POPUP = 'POPUP',
  WINDOW = 'WINDOW'
}

export interface ExternalActionMessage {
  action: DynamicComponentType;
  header: HeaderConfig;
  footer: FooterConfig;
  component: EimComponentModel;
  saveMapper?: (data: EimComponentModel) => any;
  target?: string;
}
