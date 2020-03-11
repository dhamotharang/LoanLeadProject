import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {User} from "../../model/user";
import {UserService} from "../../core/services/user.service";

@Component({
  selector: 'loanlead-user-navigation',
  templateUrl: './user-navigation.component.html',
  styleUrls: ['./user-navigation.component.scss']
})
export class UserNavigationComponent implements OnInit {
  user$: Observable<User>;

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.user$ = this.userService.getCurrentUser();
  }
}
