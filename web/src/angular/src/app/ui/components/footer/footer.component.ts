import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FooterButton, FooterConfig} from "../../../model/ui/components/footer";

@Component({
  selector: 'eim-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  @Input()
  config: FooterConfig;

  @Output()
  actionPerformed: EventEmitter<FooterButton> = new EventEmitter<FooterButton>();

  constructor() {
  }

  ngOnInit() {
  }

  buttonClick(btn: FooterButton) {
    this.actionPerformed.emit(btn)
  }
}
