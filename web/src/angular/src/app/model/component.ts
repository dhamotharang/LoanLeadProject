export interface EimComponentModel {
  id: string;
  name: string;
  description: string;
  version: string;
  configs: EimConfigModel[];
  validations: string[];
  // tasks: Tasks;
  uiConfig: EimUiConfigModel;
  properties: any;
  components: EimComponentModel[];
}

export interface EimConfigModel {
  // todo
}

export interface EimUiConfigModel {
  id: string;
  type: EimUiType;
  value: string;
}

export enum EimUiType {
  IFRAME = 'IFRAME'
}
