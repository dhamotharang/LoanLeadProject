import {Component, Input, OnInit} from '@angular/core';
import {NavbarActionModel, NavbarActionType, NavBarModel} from "../../../model/config-model";
import {Urls} from "../../../config/routes/constants";
import {Router} from "@angular/router";

@Component({
  selector: 'eim-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @Input()
  navBar: NavBarModel;

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  navBarName() {
    return this.navBar.envSettings ? this.navBar.envSettings.name : '';
  }

  actionClick(item: NavbarActionModel) {
    switch (item.type) {
      case NavbarActionType.LOGOUT:
        window.location.href = '/logout';
        break;
      case NavbarActionType.ENVIRONMENT_SETTINGS:
        this.router.navigate([`${Urls.NAV}/${Urls.ENVIRONMENT_SETTINGS}`]);
    }
  }
}
