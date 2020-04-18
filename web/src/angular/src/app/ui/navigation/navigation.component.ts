import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {User} from "../../model/user";
import {UserService} from "../../core/services/user.service";

@Component({
  selector: 'loanlead-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  user$: Observable<User>

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.user$ = this.userService.getCurrentUser();
  }

}
