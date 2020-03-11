import {Injectable} from '@angular/core';
import {DataService} from "./data.service";
import {BehaviorSubject, Observable, of} from "rxjs";
import {User} from "../../model/user";
import {map} from "rxjs/operators";
import {Router} from "@angular/router";
import {Title} from "@angular/platform-browser";
import {clone} from "../common";
import {Urls} from "../../config/routes/constants";
import {EimEnvironmentModel} from "../../model/environment/environment";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private user: User;
  private user$: BehaviorSubject<User> = new BehaviorSubject<User>(undefined);

  constructor(private dataService: DataService, private router: Router, private titleService: Title) {
    this.dataService.getCurrentUser().subscribe((data) => {
      console.log(data);
      this.setUser(data);
    });
  }

  getCurrentUser(): Observable<User> {
    return this.user$;
  }

  save(user: User): Observable<User> {
    return this.dataService.saveUser(user).pipe(map((data) => {
      this.setUser(data);
      return this.copyOfUser();
    }));
  }

  private setUser(data: User): void {
    this.user = clone(data);
    this.user$.next(clone(data));
  }

  private copyOfUser(): User {
    return JSON.parse(JSON.stringify((this.user)));
  }
}
