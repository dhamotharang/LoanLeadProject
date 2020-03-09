import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {ConfigurableComponentModel} from "../../../../model/ui/components/configurable-component";
import {EimExternalUiConfigModel} from "../../../../model/eim-ui-config";

@Component({
  selector: 'eim-web',
  templateUrl: './web.component.html',
  styleUrls: ['./web.component.scss']
})
export class WebComponent implements OnInit, ConfigurableComponentModel {
  @Input()
  component: EimExternalUiConfigModel;

  @Input()
  configs: any;

  @Output()
  configsChange: EventEmitter<any> = new EventEmitter<any>();

  @ViewChild('webComponent', {static: true})
  webComponent: ElementRef;

  constructor() {
  }

  ngOnInit(): void {
    const custom: HTMLElement = document.createElement(this.component.value);
    if (this.configs) {
      WebComponent.sendConfigs(custom, this.configs);
    }
    custom.addEventListener('configsChange', (event: CustomEvent) => {
      console.log('web change config', event);
      this.configsChange.emit(event.detail);
    });
    this.webComponent.nativeElement.appendChild(custom);
  }

  private static sendConfigs(custom: HTMLElement, configs: any): void {
    custom['configs'] = configs;
  }

}
