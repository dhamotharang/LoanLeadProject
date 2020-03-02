import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {TooltipComponent} from "../tooltip/tooltip.component";
import {DynamicComponent} from "../../../model/dynamic-component";
import {CustomTooltipConfig} from "../../../model/ui/components/custom-tooltip";

@Component({
  selector: 'eim-custom-tooltip',
  templateUrl: './custom-tooltip.component.html',
  styleUrls: ['./custom-tooltip.component.scss']
})
export class CustomTooltipComponent implements OnInit, DynamicComponent {

  @Output()
  hide: EventEmitter<any> = new EventEmitter();

  @ViewChild(TooltipComponent, {static: true})
  tooltip: TooltipComponent;

  @Input()
  config: CustomTooltipConfig;

  panelStyle: any;

  constructor() {
  }

  ngOnInit() {
    this.panelStyle = {
      width: this.config.width,
      height: this.config.height
    }
  }

  show(): void {
    this.tooltip.show(null, document.querySelector(this.config.target));
  }
}
