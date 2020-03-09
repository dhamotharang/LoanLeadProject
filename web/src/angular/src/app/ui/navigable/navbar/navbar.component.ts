import {Component, Input, OnInit} from '@angular/core';
import {NavbarActionModel, NavbarActionType} from "../../../model/config-model";
import {Urls} from "../../../config/routes/constants";
import {Router} from "@angular/router";
import {EimEnvironmentModel} from "../../../model/environment/environment";

@Component({
  selector: 'eim-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @Input()
  environment: EimEnvironmentModel;

  actions: NavbarActionModel[] = [{
    type: NavbarActionType.USER,
    icon: "assets/images/user.png"
  }, {
    type: NavbarActionType.ENVIRONMENT_SETTINGS,
    icon: "assets/images/config.png"
  }, {
    type: NavbarActionType.LOGOUT,
    icon: "assets/images/logout.png"
  }];

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  navBarName() {
    return this.environment && this.environment.name ? this.environment.name : '';
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

  getHeaderStyle() {
    const c = this.environment.color;
    return {
      background: `linear-gradient(180deg, ${c} 0px, ${c} 100px, #F2F2F2 200px)`
    }
  }
}
