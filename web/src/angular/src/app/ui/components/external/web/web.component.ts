import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {ExternalComponentModel} from "../../../../model/ui/components/external";
import {ComponentModel} from "../../../../model/config-model";

@Component({
  selector: 'eim-web',
  templateUrl: './web.component.html',
  styleUrls: ['./web.component.scss']
})
export class WebComponent implements OnInit, ExternalComponentModel {

  @Input()
  config: ComponentModel;
  @Output()
  configChange: EventEmitter<any> = new EventEmitter<any>();

  @ViewChild('webComponent', {static: true})
  webComponent: ElementRef;

  constructor() {
  }

  ngOnInit(): void {
    const custom = document.createElement(this.config.value);
    custom['configs'] = this.config.configs;
    custom.addEventListener('configChange', (event: CustomEvent) => {
      this.configChange.emit(event.detail);
    });
    this.webComponent.nativeElement.appendChild(custom);
  }

}
