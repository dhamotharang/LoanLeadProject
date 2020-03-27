import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {User} from "../model/user";
import {UserService} from "../core/services/user.service";

@Component({
  selector: 'eim-logged-users',
  templateUrl: './logged-users.component.html',
  styleUrls: ['./logged-users.component.scss']
})
export class LoggedUsersComponent implements OnInit {
  users$: Observable<User[]>;

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.users$ = this.userService.getLoggedUsers();
  }

  format(date: Date) {
    return ((date.getDate() < 10) ? '0' + date.getDate() : date.getDate()) +
      "/" + ((date.getMonth() < 10) ? '0' + (date.getMonth() + 1) : (date.getMonth() + 1)) +
      "/" + date.getFullYear() +
      " " + ((date.getHours() < 10) ? '0' + date.getHours() : date.getHours()) +
      ":" + ((date.getMinutes() < 10) ? '0' + date.getMinutes() : date.getMinutes()) +
      ":" + ((date.getSeconds() < 10) ? '0' + date.getSeconds() : date.getSeconds());
  }

  dateInstance(date: string) {
    return new Date(date);
  }

  logoutUser(userId: string) {

  }
}
