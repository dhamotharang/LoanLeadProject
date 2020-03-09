import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {ConfigurableComponentModel} from "../../../model/ui/components/configurable-component";
import {EimEditorUiConfigModel} from "../../../model/eim-ui-config";
import {AceEditorComponent} from "ng2-ace-editor";

@Component({
  selector: 'eim-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit, ConfigurableComponentModel {

  @Input()
  configs: any;

  @Input()
  component: EimEditorUiConfigModel;

  @Output()
  configsChange: EventEmitter<any> = new EventEmitter<any>();

  @Input()
  value: string;

  @Output()
  valueChange: EventEmitter<string> = new EventEmitter<string>();

  @ViewChild(AceEditorComponent, {static: true})
  aceEditorComponent;

  constructor() {
  }

  ngOnInit() {
    if (this.configs && this.configs[0] && this.configs[0].content) {
      this.value = this.configs[0].content;
    }
  }

  dataChanged() {
    this.configs[0].content = this.value;
    this.configsChange.emit(this.configs);
  }
}
