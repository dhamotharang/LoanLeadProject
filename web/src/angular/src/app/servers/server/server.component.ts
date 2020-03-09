import {Component, Input, OnInit} from '@angular/core';
import {EimServerModel} from "../../model/servers/server-model";
import {EimUiService} from "../../core/services/components/eim-ui.service";
import {FooterAction, FooterConfig, HTTPMethod} from "../../model/ui/components/footer";
import {DynamicComponentType, ExternalActionMessage} from "../../model/dynamic-component";
import {EimUiConfigModel, EimUiConfigType, EimUiDirection} from "../../model/eim-ui-config";
import {EimMenuItem, ItemMenuItemModel, MenuItemType} from "../../model/menu-model";
import {ServersService} from "../../core/services/servers.service";

const SERVER_COMPONENT_MENU_ITEMS: EimMenuItem[] = [
  {
    type: MenuItemType.ITEM,
    clickable: true,
    iconCls: 'fas fa-cog configure-color',
    caption: 'Properties'
  }, {
    type: MenuItemType.ITEM,
    clickable: true,
    iconCls: 'fas fa-trash remove-color',
    caption: 'Remove'
  }];

@Component({
  selector: 'eim-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.scss']
})
export class ServerComponent implements OnInit {

  serverMenuItems: EimMenuItem[] = SERVER_COMPONENT_MENU_ITEMS;


  menuDirection = EimUiDirection.VERTICAL;

  @Input()
  server: EimServerModel;

  constructor(private eimUiService: EimUiService, private serversService: ServersService) {
  }

  ngOnInit(): void {
  }

  addProductClick() {
    const action: FooterAction = {
      method: HTTPMethod.PATCH,
      url: '/eim/api/config/resource/'
    };
    const e: ExternalActionMessage = {
      action: DynamicComponentType.WINDOW,
      header: {
        description: this.server.hostname,
        caption: 'Add Products/Components',
        closeIcon: true
      },
      footer: this.getFooter(action),
      component: {
        uiConfig: ServerComponent.getUiConfig()
      }
    };
    this.eimUiService.createComponent(e).hide.subscribe(() => {
      this.ngOnInit();
    });
  }

  private static getUiConfig(): EimUiConfigModel {
    return {
      id: '',
      type: EimUiConfigType.WEB_COMPONENT,
      value: "eim-add-server-product"
    } as EimUiConfigModel;
  }

  private getFooter(action: FooterAction): FooterConfig {
    return {
      buttons: [{
        type: 'SAVE',
        caption: 'Add Selected',
        disabled: true,
        cls: 'main',
        action: action
      }, {
        type: 'CLOSE',
        caption: 'Cancel',
        cls: 'secondary'
      }]
    };
  }

  onMenuClick(menuItem: EimMenuItem) {
    if (menuItem.type === MenuItemType.ITEM) {
      const item: ItemMenuItemModel = menuItem as ItemMenuItemModel;
      switch (item.caption) {
        case 'Properties':
          this.openServerPropertiesWindow();
          break;
        case 'Remove':
          this.removeServer();
          break;
      }
    }
  }

  private openServerPropertiesWindow(): void {
    console.log('implement me: Open server properties window');
  }

  private removeServer() {
    this.serversService.removeServer(this.server.id).subscribe((data) => {
      console.log('deleted');
    });
  }
}
