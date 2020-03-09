import {Component, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild} from '@angular/core';
import {ConfigurableComponentModel} from '../../../../model/ui/components/configurable-component';
import {EimExternalUiConfigModel} from "../../../../model/eim-ui-config";

@Component({
  selector: 'eim-iframe',
  templateUrl: './iframe.component.html',
  styleUrls: ['./iframe.component.scss']
})
export class IframeComponent implements OnInit, ConfigurableComponentModel, OnDestroy {
  @Input()
  component: EimExternalUiConfigModel;

  @Input()
  configs: any;

  @Output()
  configsChange: EventEmitter<any> = new EventEmitter<any>();

  @ViewChild('iframe', {static: true})
  iframe: ElementRef;

  private _postMessageCallback: (e) => void;

  constructor() {
    this.addEventListener();
  }

  private addEventListener() {
    this._postMessageCallback = (e) => {
      if (e.source === this.iframe.nativeElement.contentWindow) {
        this.configsChange.emit(e.data);
      }
    };
    window.addEventListener('message', this._postMessageCallback);
  }

  ngOnInit(): void {
    if (this.configs) {
      console.log('config is present', this.configs);
      this.sendConfigs(this.configs);
    }
  }

  private sendConfigs(configs: any) {
    this.iframe.nativeElement.addEventListener('load', () => {
      console.log('setting configs to content window', configs);
      this.iframe.nativeElement.contentWindow.configs = configs;
    });
  }

  ngOnDestroy(): void {
    window.removeEventListener('message', this._postMessageCallback);
  }
}
