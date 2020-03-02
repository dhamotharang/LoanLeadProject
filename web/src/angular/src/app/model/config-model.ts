import {EimConfigModel} from "./component";

class EnvSettingsModel {
  name: string;
  color: string;
}

export interface NavBarModel {
  envSettings: EnvSettingsModel;
  actions: NavbarActionModel[];
}

export interface NavbarActionModel {
  icon: string;
  type: NavbarActionType;
}

export enum NavbarActionType {
  LOGOUT = 'LOGOUT',
  ENVIRONMENT_SETTINGS = 'ENVIRONMENT_SETTINGS'
}

export enum Direction {
  VERTICAL = 'VERTICAL',
  HORIZONTAL = 'HORIZONTAL'
}

export interface ComponentModel {
  type: ComponentType;
  header?: string;
  value?: string;
  configs?: EimConfigModel;

  // for split
  direction?: Direction;
  sizes?: number[];
  components?: ComponentModel[];
  resizable?: boolean;
}

export enum ComponentType {
  IFRAME = 'IFRAME',
  WEB_COMPONENT = 'WEB_COMPONENT',
  HTML = 'HTML',
  SPLIT = 'SPLIT',
  EDITOR = 'EDITOR'
}

