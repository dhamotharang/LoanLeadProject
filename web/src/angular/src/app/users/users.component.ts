import {Component, OnInit} from '@angular/core';
import {User} from "../model/user";
import {Observable} from "rxjs";
import {UserService} from "../core/services/user.service";
import {FormControl, Validators} from "@angular/forms";
import {ServerResp} from "../model/server-resp";
import {Role} from "../model/role";
import {RoleService} from "../core/services/role.service";
import {NgxSpinnerService} from "ngx-spinner";

@Component({
  selector: 'loanlead-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  searchValue: FormControl = new FormControl('');
  usersItemsCount: FormControl = new FormControl(
    5,
    [
      Validators.required,
      Validators.min(5),
      Validators.max(20),
    ]);
  newUsersItemsCount: FormControl = new FormControl(
    5,
    [
      Validators.required,
      Validators.min(5),
      Validators.max(20),
    ]);
  userToApproveRoles: FormControl = new FormControl('', Validators.required);

  usersCount$: Observable<number>;
  newUsersCount$: Observable<number>;

  users$: Observable<User[]>;
  roles$: Observable<Role[]>;
  newUsers$: Observable<User[]>;
  userRoles: string[];
  countChanged: boolean;
  selectAll: boolean;
  anySelected: boolean;
  entitiesToDelete: number[];
  userToApprove: User;

  constructor(private userService: UserService, private roleService: RoleService, private spinner: NgxSpinnerService) {
  }

  ngOnInit(): void {
    this.spinner.show();
    this.loadUsers(1);
    this.loadNewUsers(1);
    this.roles$ = this.roleService.getAllRoles();
    this.usersCount$ = this.userService.getUsersCount();
    this.newUsersCount$ = this.userService.getNewUsersCount();
    this.selectAll = false;
    this.entitiesToDelete = [];
  }

  check(id?: number): void {
    if (id) {
      if (this.entitiesToDelete.includes(id)) {
        this.entitiesToDelete.splice(this.entitiesToDelete.indexOf(id), 1);
      } else {
        this.entitiesToDelete.push(id);
      }
    }
    this.anySelected = this.entitiesToDelete.length > 0;
  }

  loadUsers(page: number) {
    this.users$ = this.userService.getUsers(page - 1, this.usersItemsCount.value).pipe(users => {
      this.spinner.hide();
      return users;
    });
  }

  loadNewUsers(page: number) {
    this.newUsers$ = this.userService.getNewUsers(page - 1, this.newUsersItemsCount.value);
  }

  validateUsersItemsCount() {
    const input = document.getElementById('usersItemsCount');
    const labelSpan = document.querySelector('#usersItemsCount + .feedback');

    input.classList[this.usersItemsCount.errors ? 'add' : 'remove']('invalid');
    let textContent = '';

    if (this.usersItemsCount.errors) {
      Object.keys(this.usersItemsCount.errors).forEach((error) => {
        switch (error) {
          case 'required':
            textContent = 'Please, enter this field';
            break;
          case 'min':
            textContent = 'Please, enter higher number';
            break;
          case 'max':
            textContent = 'Please, enter lower number';
            break;
          default:
            textContent = '';
            break;
        }
      });
    }
    labelSpan.textContent = textContent;
    this.countChanged = true;
  }

  validateNewUsersItemsCount() {
    const input = document.getElementById('newUsersItemsCount');
    const labelSpan = document.querySelector('#newUsersItemsCount + .feedback');

    input.classList[this.newUsersItemsCount.errors ? 'add' : 'remove']('invalid');
    let textContent = '';

    if (this.newUsersItemsCount.errors) {
      Object.keys(this.newUsersItemsCount.errors).forEach((error) => {
        switch (error) {
          case 'required':
            textContent = 'Please, enter this field';
            break;
          case 'min':
            textContent = 'Please, enter higher number';
            break;
          case 'max':
            textContent = 'Please, enter lower number';
            break;
          default:
            textContent = '';
            break;
        }
      });
    }
    labelSpan.textContent = textContent;
    this.countChanged = true;
  }

  filterUsers() {
    if (!this.usersItemsCount.errors && this.countChanged) {
      const page = 1;
      this.loadUsers(page);
      this.countChanged = false;
    }
  }

  filterNewUsers() {
    if (!this.newUsersItemsCount.errors && this.countChanged) {
      const page = 1;
      this.loadNewUsers(page);
      this.countChanged = false;
    }
  }

  usersPagesCount(usersCount: number) {
    let result = usersCount / this.newUsersItemsCount.value;
    return Math.round(result) < result ? Math.round(result) + 1 : Math.round(result);
  }

  newUsersPagesCount(usersCount: number) {
    let result = usersCount / this.newUsersItemsCount.value;
    return Math.round(result) < result ? Math.round(result) + 1 : Math.round(result);
  }

  selectAllTrigger(users: User[]) {
    this.selectAll = !this.selectAll;
    if (this.selectAll) {
      this.entitiesToDelete = users.map(user => user.id);
    } else {
      this.entitiesToDelete = [];
    }
    this.anySelected = this.selectAll;
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

  setUserRoles(user: User) {
    this.userRoles = user.roles;
  }

  approveUser(user: User) {
    user.newlyCreated = false;
    this.userToApprove = user;
  }

  save() {
    this.userToApprove.roles = this.userToApproveRoles.value;
    this.userService.approveUser(this.userToApprove).subscribe((data: User) => {
      if (data) {
        this.ngOnInit();
      }
    });
  }

  delete() {
    this.userService.deleteUsers(this.entitiesToDelete).subscribe((data: ServerResp<any>) => {
      if (data.err) {
        alert(`Request error with code ${data.err.status}`);
      } else {
        this.loadUsers(1);
        this.usersCount$ = this.userService.getUsersCount();
      }
    });
  }
}
