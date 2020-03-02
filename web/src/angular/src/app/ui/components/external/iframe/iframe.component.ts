import {Component, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild} from '@angular/core';
import {ExternalComponentModel} from '../../../../model/ui/components/external';
import {ComponentModel} from '../../../../model/config-model';

@Component({
  selector: 'eim-iframe',
  templateUrl: './iframe.component.html',
  styleUrls: ['./iframe.component.scss']
})
export class IframeComponent implements OnInit, ExternalComponentModel, OnDestroy {
  @Input()
  config: ComponentModel;

  @Output()
  configChange: EventEmitter<any> = new EventEmitter<any>();

  @ViewChild('iframe', {static: true})
  iframe: ElementRef;

  private _postMessageCallback: (e) => void;

  constructor() {
    console.log(this);
    this.addEventListener();
  }

  private addEventListener() {
    this._postMessageCallback = (e) => {
      if (e.source === this.iframe.nativeElement.contentWindow) {
        this.configChange.emit(e.data);
      }
    };
    window.addEventListener('message', this._postMessageCallback);
  }

  ngOnInit(): void {
    this.iframe.nativeElement.addEventListener('load', () => {
      console.log('setting configs to content window', this.config.configs);
      this.iframe.nativeElement.contentWindow.configs = this.config.configs;
    });
  }

  ngOnDestroy(): void {
    window.removeEventListener('message', this._postMessageCallback);
  }

}
