import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import Split from 'split.js';
import {Direction} from "../../../model/config-model";

@Component({
  selector: 'eim-split',
  templateUrl: './split.component.html',
  styleUrls: ['./split.component.scss']
})
export class SplitComponent implements OnInit {

  @Input()
  direction: Direction = Direction.HORIZONTAL;

  @Input()
  sizes: number[];

  @Input()
  resizable: boolean;

  @ViewChild('divElement', {
    static: true
  })
  divElement: ElementRef;

  constructor() {
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    if (this.resizable) {
      const children = this.divElement.nativeElement.querySelectorAll(':scope > *');
      Split(children, {
        direction: this.getDirection(),
        sizes: this.sizes,
        minSize: 100,
        gutterSize: 4
      });
    }
  }

  private getDirection() {
    return this.direction === Direction.HORIZONTAL ? 'horizontal' : 'vertical';
  }

  contentClass() {
    return {
      content: true,
      'flex-row': this.direction === Direction.HORIZONTAL,
      'flex-column': this.direction === Direction.VERTICAL
    };
  }

}
