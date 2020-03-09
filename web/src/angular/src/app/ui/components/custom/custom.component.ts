import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {
  EimExternalUiConfigModel,
  EimSplitUiConfigModel,
  EimUiConfigModel,
  EimUiConfigType
} from "../../../model/eim-ui-config";
import {ConfigurableComponentModel} from "../../../model/ui/components/configurable-component";

@Component({
  selector: 'eim-custom',
  templateUrl: './custom.component.html',
  styleUrls: ['./custom.component.scss']
})
export class CustomComponent implements OnInit, ConfigurableComponentModel {

  @Input()
  component: EimUiConfigModel;

  @Input()
  configs: any;

  @Output()
  configsChange: EventEmitter<any> = new EventEmitter<any>();

  componentType = EimUiConfigType;

  asEimSplitUiConfigModel(component: EimUiConfigModel): EimSplitUiConfigModel {
    return component as EimSplitUiConfigModel;
  }

  asEimExternalUiConfigModel(component: EimUiConfigModel): EimExternalUiConfigModel {
    return component as EimExternalUiConfigModel;
  }

  constructor() {
  }

  ngOnInit() {
  }

  dataChanged($event: any) {
    console.log('custom config change', $event);
    this.configsChange.emit($event);
  }
}
