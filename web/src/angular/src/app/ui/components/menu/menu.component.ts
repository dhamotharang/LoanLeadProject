import {Component, EventEmitter, Input, OnInit, Output, TemplateRef, ViewChild} from '@angular/core';
import {TooltipComponent} from "../tooltip/tooltip.component";
import {EimMenuItem, MenuItemType} from "../../../model/menu-model";
import {EimUiDirection} from "../../../model/eim-ui-config";

@Component({
  selector: 'eim-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  _MenuItemType = MenuItemType;

  @ViewChild(TooltipComponent)
  tooltip: TooltipComponent;

  @Input()
  itemTemplate: TemplateRef<any>;

  @Input()
  menuItems: EimMenuItem[];

  @Input()
  direction: EimUiDirection;

  @Output()
  menuItemClick: EventEmitter<EimMenuItem> = new EventEmitter<EimMenuItem>();

  constructor() {
  }

  ngOnInit() {
  }

  show(event: Event): void {
    this.tooltip.show(event);
  }

  menuWrapperClass() {
    return {
      'menu-wrapper': true,
      'flex-row': this.direction === EimUiDirection.HORIZONTAL,
      'flex-column': this.direction === EimUiDirection.VERTICAL
    };
  }

  onMenuItemClick(item: EimMenuItem) {
    if (item.clickable) {
      this.menuItemClick.emit(item);
    }
  }
}
