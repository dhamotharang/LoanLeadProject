export interface EimUiConfigModel {
  id: string;
  type: EimUiConfigType;
}

export enum EimUiConfigType {
  IFRAME = 'IFRAME',
  WEB_COMPONENT = 'WEB_COMPONENT',
  HTML = 'HTML',
  SPLIT = 'SPLIT',
  EDITOR = 'EDITOR'
}

export enum EimUiDirection {
  VERTICAL = 'VERTICAL',
  HORIZONTAL = 'HORIZONTAL'
}

export interface EimSplitUiConfigModel extends EimUiConfigModel {
  direction: EimUiDirection;
  resizable: boolean;
  sizes: number[];
  elements: EimUiConfigModel[];
}

export interface EimExternalUiConfigModel extends EimUiConfigModel {
  value: string;
}

export interface EimEditorUiConfigModel extends EimUiConfigModel {
}
