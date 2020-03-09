import {Component, OnInit} from '@angular/core';
import {DataService} from "../core/services/data.service";
import {FooterAction, FooterConfig, HTTPMethod} from "../model/ui/components/footer";
import {CustomTooltipConfig} from "../model/ui/components/custom-tooltip";
import {DynamicComponentType, ExternalActionMessage} from "../model/dynamic-component";
import {EimUiService} from "../core/services/components/eim-ui.service";
import {EimResourceModel} from "../model/component";
import {EimUiConfigModel, EimUiConfigType} from "../model/eim-ui-config";

@Component({
  selector: 'eim-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.scss']
})
export class ResourcesComponent implements OnInit {

  resources: EimResourceModel[];

  constructor(private dataService: DataService, private eimUiService: EimUiService) {
  }

  ngOnInit() {
    this.dataService.getResources().subscribe((data) => {
      this.resources = data;
      console.log('Resources', data);
    });
  }

  addResourceClick(): void {
    this.showPopup();
  }

  configure(resource: EimResourceModel) {
    const action: FooterAction = {
      method: HTTPMethod.PUT,
      url: '/eim/api/resources/' + resource.id
    };
    const e: ExternalActionMessage = {
      action: DynamicComponentType.WINDOW,
      header: {
        description: 'Resource',
        icon: resource.icon || this.defaultIcon(),
        caption: resource.name,
        closeIcon: true
      },
      footer: this.getFooter(action),
      component: resource
    };
    this.eimUiService.createComponent(e).hide.subscribe(() => {
      this.ngOnInit();
    });
  }

  showPopup(): void {
    const e: CustomTooltipConfig = this.addResourcesActionConfiguration();
    this.eimUiService.createComponent(e).hide.subscribe(() => {
      this.ngOnInit();
    });
  }

  private getFooter(action: FooterAction): FooterConfig {
    return {
      buttons: [{
        type: 'SAVE',
        caption: 'Save',
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

  addResourcesActionConfiguration(): CustomTooltipConfig {
    const action: FooterAction = {
      method: HTTPMethod.PATCH,
      url: '/eim/api/resources'
    };
    return {
      action: DynamicComponentType.POPUP,
      target: '#add-resource-action',
      width: '700px',
      height: '500px',
      header: {
        caption: 'Select Optional Resources',
        closeIcon: true
      },
      footer: this.getFooter(action),
      component: {
        uiConfig: ResourcesComponent.getUiConfig()
      }
    };
  }

  private static getUiConfig(): EimUiConfigModel {
    return {
      id: '',
      type: EimUiConfigType.WEB_COMPONENT,
      value: "eim-add-resource"
    } as EimUiConfigModel;
  }

  defaultIcon(): string {
    return 'assets/images/resource.png'
  }
}
