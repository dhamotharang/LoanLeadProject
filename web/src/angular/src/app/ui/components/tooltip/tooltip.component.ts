import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {OverlayPanel} from "primeng";
import {FooterConfig} from "../../../model/ui/components/footer";
import {HeaderConfig} from "../../../model/ui/components/header";

@Component({
  selector: 'eim-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.scss']
})
export class TooltipComponent implements OnInit {

  @ViewChild(OverlayPanel, {static: true})
  op: OverlayPanel;

  @Output()
  hide: EventEmitter<void> = new EventEmitter<void>();

  @Input()
  style: any;

  constructor() {
  }

  ngOnInit() {
  }

  show(event: Event, target?: EventTarget) {
    this.op.show(event, target);
  }
}
