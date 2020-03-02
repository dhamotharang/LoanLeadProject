import {EventEmitter} from "@angular/core";
import {HeaderConfig} from "./ui/components/header";
import {FooterConfig} from "./ui/components/footer";
import {ComponentModel} from "./config-model";

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
  component: ComponentModel;
  target?: string;
}
