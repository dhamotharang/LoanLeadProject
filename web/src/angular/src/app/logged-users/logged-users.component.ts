import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {User} from "../model/user";
import {UserService} from "../core/services/user.service";
import {NgxSpinnerService} from "ngx-spinner";

@Component({
  selector: 'loanlead-logged-users',
  templateUrl: './logged-users.component.html',
  styleUrls: ['./logged-users.component.scss']
})
export class LoggedUsersComponent implements OnInit {
  users: User[];
  userBranches: string[];

  constructor(private userService: UserService, private spinner: NgxSpinnerService) {
  }

  ngOnInit(): void {
    this.spinner.show();
    this.userService.getLoggedUsers()
      .subscribe(users => {
        this.spinner.hide();
        this.users = users;
      });
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

  logoutUser(employeeId: string) {
    this.userService.logoutUser(employeeId)
      .subscribe(data => {
        if (!data.err) {
          this.users = data.data;
        } else {
          alert(data.err.message);
        }
      });
  }

  setUserBranches(branches: string[]) {
    this.userBranches = branches;
  }
}
