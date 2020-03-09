import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {HeaderConfig} from "../../../model/ui/components/header";

@Component({
  selector: 'eim-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnChanges {
  defaultConfig: HeaderConfig = {
    caption: 'Header',
    closeIcon: 'fas fa-times'
  };

  @Input()
  config: HeaderConfig;

  _headerConfig: HeaderConfig;

  @Output()
  closeClick: EventEmitter<void> = new EventEmitter<any>();

  headerClick() {
    this.closeClick.emit();
  }

  constructor() {
  }

  parseConfig(): void {
    if (this.config.closeIcon === true) {
      delete this.config.closeIcon;
    }
    this._headerConfig = {...this.defaultConfig, ...this.config};
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.config) {
      this.parseConfig();
    }
  }

}
