import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {HeaderConfig} from "../../../model/ui/components/header";
import {FooterButton, FooterConfig} from "../../../model/ui/components/footer";

@Component({
  selector: 'eim-window-content',
  templateUrl: './window-content.component.html',
  styleUrls: ['./window-content.component.scss']
})
export class WindowContentComponent implements OnInit {

  @Input()
  header: HeaderConfig;

  @Input()
  footer: FooterConfig;

  @Output()
  actionPerformed: EventEmitter<FooterButton> = new EventEmitter<FooterButton>();

  constructor() {
  }

  ngOnInit(): void {
  }

  closeClick() {
    this.actionPerformed.emit({type: 'CLOSE', caption: '', cls: ''});
  }
}
