export interface FooterConfig {
  buttons: FooterButton[];
}

export interface FooterButton {
  caption: string;
  cls: string;
  type: string;
  disabled?: boolean;
  action?: FooterAction;
}

export interface FooterAction {
  method: HTTPMethod;
  url: string;
}

export enum HTTPMethod {
  GET,
  POST,
  PUT,
  PATCH,
  DELETE
}
