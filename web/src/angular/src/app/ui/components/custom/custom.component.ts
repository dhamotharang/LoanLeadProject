import {Component, Input, OnInit} from '@angular/core';
import {ComponentModel, ComponentType} from "../../../model/config-model";

@Component({
  selector: 'eim-custom',
  templateUrl: './custom.component.html',
  styleUrls: ['./custom.component.scss']
})
export class CustomComponent implements OnInit {

  @Input()
  component: ComponentModel;
  componentType = ComponentType;

  constructor() {
  }

  ngOnInit() {
  }

}
