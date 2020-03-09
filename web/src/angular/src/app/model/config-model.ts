export interface NavbarActionModel {
  icon: string;
  type: NavbarActionType;
}

export enum NavbarActionType {
  LOGOUT = 'LOGOUT',
  ENVIRONMENT_SETTINGS = 'ENVIRONMENT_SETTINGS',
  USER = 'USER'
}
