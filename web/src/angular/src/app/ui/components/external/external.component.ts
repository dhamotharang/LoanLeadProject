import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import {ComponentModel, ComponentType} from "../../../model/config-model";

@Component({
  selector: 'eim-external',
  templateUrl: './external.component.html',
  styleUrls: ['./external.component.scss']
})
export class ExternalComponent implements OnInit {

  @Input()
  component: ComponentModel;

  @Output()
  configChange: EventEmitter<any> = new EventEmitter<any>();

  type = ComponentType;

  constructor() {
  }

  ngOnInit() {
  }

}
