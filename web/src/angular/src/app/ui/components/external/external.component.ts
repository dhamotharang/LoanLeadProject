import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import {ConfigurableComponentModel} from "../../../model/ui/components/configurable-component";
import {EimExternalUiConfigModel, EimUiConfigType} from "../../../model/eim-ui-config";

@Component({
  selector: 'eim-external',
  templateUrl: './external.component.html',
  styleUrls: ['./external.component.scss']
})
export class ExternalComponent implements OnInit, ConfigurableComponentModel {

  @Input()
  component: EimExternalUiConfigModel;

  @Input()
  configs: any;

  @Output()
  configsChange: EventEmitter<any> = new EventEmitter<any>();

  type = EimUiConfigType;

  constructor() {
  }

  ngOnInit() {
  }

  dataChanged($event: any) {
    console.log('external config change', $event);
    this.configsChange.emit($event);
  }
}
