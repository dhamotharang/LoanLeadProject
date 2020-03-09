export interface ItemMenuItemModel {
  iconCls: string;
  caption: string;
  type: MenuItemType.ITEM;
  clickable: true;
}

export interface SeparatorMenuItemModel {
  type: MenuItemType.SEPARATOR;
  clickable: false;
}

export type EimMenuItem = ItemMenuItemModel | SeparatorMenuItemModel;

export enum MenuItemType {
  SEPARATOR,
  ITEM
}
