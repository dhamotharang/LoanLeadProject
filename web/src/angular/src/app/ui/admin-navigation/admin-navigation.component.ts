import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {User} from "../../model/user";
import {UserService} from "../../core/services/user.service";

@Component({
  selector: 'loanlead-admin-navigation',
  templateUrl: './admin-navigation.component.html',
  styleUrls: ['./admin-navigation.component.scss']
})
export class AdminNavigationComponent implements OnInit {
  user$: Observable<User>

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.user$ = this.userService.getCurrentUser();
  }

}
