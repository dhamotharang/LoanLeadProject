import {Component, OnInit} from '@angular/core';
import {ServersService} from "../core/services/servers.service";
import {EimServerModel} from "../model/servers/server-model";
import {CustomTooltipConfig} from "../model/ui/components/custom-tooltip";
import {EimUiService} from "../core/services/components/eim-ui.service";
import {FooterAction, FooterConfig, HTTPMethod} from "../model/ui/components/footer";
import {DynamicComponentType} from "../model/dynamic-component";
import {EimUiConfigModel, EimUiConfigType} from "../model/eim-ui-config";

@Component({
  selector: 'eim-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.scss']
})
export class ServersComponent implements OnInit {
  // private _items: MenuItem[] = [
  //   {label: 'Configure', icon: 'pi pi-fw pi-cog'},
  //   {label: 'Open', icon: 'pi pi-fw pi-download'},
  //   {label: 'Undo', icon: 'pi pi-fw pi-refresh'}
  // ];

  servers: EimServerModel[];

  constructor(private serversService: ServersService, private eimUiService: EimUiService) {
  }

  ngOnInit() {
    this.serversService.getServers().subscribe((data) => {
      this.servers = data;
      console.log('Servers', data);
    });
  }

  // menuItemClick(item: MenuItem, resource: ResourceModel): void {
  //   console.log("args", item, resource);
  //   switch (item.label) {
  //     case 'Configure':
  //       this.configureResource(resource);
  //       break;
  //     case 'Open':
  //       this.
  //   }
  // }
  //
  // buildMenuItems(resource: ResourceModel) {
  //   return this._items.map((i) => {
  //     return {
  //       ...i,
  //       command: (event) => this.menuItemClick(event.item, resource)
  //     };
  //   });
  // }

  addServerClick() {
    const e: CustomTooltipConfig = this.addServersActionConfiguration();
    this.eimUiService.createComponent(e).hide.subscribe(() => {
      this.ngOnInit();
    });
  }

  private getFooter(action: FooterAction): FooterConfig {
    return {
      buttons: [{
        type: 'SAVE',
        caption: 'OK',
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

  private addServersActionConfiguration(): CustomTooltipConfig {
    const action: FooterAction = {
      method: HTTPMethod.POST,
      url: '/eim/api/servers'
    };
    return {
      action: DynamicComponentType.POPUP,
      target: '#add-server-action',
      width: '430px',
      height: '330px',
      header: {
        caption: 'Add Server',
        closeIcon: false
      },
      saveMapper: (data) => {
        console.log('save mapper save mapper');
        console.log(data);
        return data.configs;
      },
      footer: this.getFooter(action),
      component: {
        uiConfig: ServersComponent.getUiConfig()
      }
    };
  }

  private static getUiConfig(): EimUiConfigModel {
    return {
      id: '',
      type: EimUiConfigType.WEB_COMPONENT,
      value: "eim-add-server"
    } as EimUiConfigModel;
  }
}
