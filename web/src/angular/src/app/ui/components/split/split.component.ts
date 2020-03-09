import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import Split from 'split.js';
import {EimUiDirection, EimSplitUiConfigModel} from "../../../model/eim-ui-config";

@Component({
  selector: 'eim-split',
  templateUrl: './split.component.html',
  styleUrls: ['./split.component.scss']
})
export class SplitComponent implements OnInit {

  @Input()
  component: EimSplitUiConfigModel;

  @ViewChild('divElement', {
    static: true
  })
  divElement: ElementRef;

  constructor() {
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    const children = this.divElement.nativeElement.querySelectorAll(':scope > *');
    if (this.component.resizable) {
      if (children.length != this.component.sizes.length) {
        throw new Error('elements count and sizes length mismatch');
      }
      Split(children, {
        direction: this.getDirection(),
        sizes: this.component.sizes,
        minSize: 100,
        gutterSize: 4
      });
    } else {
      children.forEach((el, index) => {
        if (index > 0) {
          this.addSeparator(el);
        }
        el.style.height = `calc(${this.component.sizes[index]}% - 2px)`;
      });
    }
  }

  private getDirection() {
    return this.component.direction === EimUiDirection.HORIZONTAL ? 'horizontal' : 'vertical';
  }

  contentClass() {
    return {
      content: true,
      'flex-row': this.component.direction === EimUiDirection.HORIZONTAL,
      'flex-column': this.component.direction === EimUiDirection.VERTICAL
    };
  }

  private addSeparator(el: Element) {
    const separator = document.createElement('div');
    separator.classList.add('separator');
    if (this.component.direction == EimUiDirection.HORIZONTAL) {
      separator.style.width = '4px';
      separator.classList.add('separator-horizontal');
    } else {
      separator.style.height = '4px';
      separator.classList.add('separator-vertical');
    }
    this.divElement.nativeElement.insertBefore(separator, el);
  }
}
