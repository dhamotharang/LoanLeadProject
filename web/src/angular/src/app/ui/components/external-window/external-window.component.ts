import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {DynamicComponent, ExternalActionMessage} from "../../../model/dynamic-component";

@Component({
  selector: 'eim-custom-window',
  templateUrl: './external-window.component.html',
  styleUrls: ['./external-window.component.scss']
})
export class ExternalWindowComponent implements OnInit, DynamicComponent {

  @Input()
  config: ExternalActionMessage;

  @Output()
  hide: EventEmitter<any> = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
    console.log('init', this.config);
  }

  show(): void {
  }
}
