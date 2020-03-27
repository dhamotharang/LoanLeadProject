import {Injectable} from '@angular/core';
import {DataService} from './data.service';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {map} from 'rxjs/operators';
import {Router} from '@angular/router';
import {Title} from '@angular/platform-browser';
import {clone} from '../common';
import {User} from '../../model/user';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {ServerResp} from '../../model/server-resp';
import {Entity} from '../../model/entity';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private user: User;
  private user$: BehaviorSubject<User> = new BehaviorSubject<User>(undefined);

  constructor(private dataService: DataService, private router: Router, private titleService: Title, private httpClient: HttpClient) {
    this.dataService.getCurrentUser().subscribe((data) => {
      this.setUser(data);
    });
  }

  getCurrentUser(): Observable<User> {
    return this.dataService.getCurrentUser();
  }

  save(formData: FormData): Observable<User> {
    return this.dataService.post<User>(`/api/users`, formData).pipe(map((data) => data.data));
  }

  getUser(id: number) {
    return this.dataService.get<User>(`/api/users/${id}`).pipe(map((data) => data.data));
  }

  getUsers(page, itemsPerPage): Observable<User[]> {
    const params = new HttpParams()
      .set('page', page)
      .set('itemsPerPage', itemsPerPage);

    return this.dataService.get<User[]>(`/api/users`, params).pipe(map((data) => data.data));
  }

  getUsersCount(): Observable<number> {
    return this.dataService.get<number>(`/api/users/count`).pipe(map((data) => data.data));
  }

  getAllUsers(): Observable<User[]> {
    return this.dataService.get<User[]>(`/api/users/all`).pipe(map((data) => data.data));
  }

  getNewUsers(page, itemsPerPage): Observable<User[]> {
    const params = new HttpParams()
      .set('page', page)
      .set('itemsPerPage', itemsPerPage);
    return this.dataService.get<User[]>(`/api/users/new`, params).pipe(map((data) => data.data));
  }

  getNewUsersCount(): Observable<number> {
    return this.dataService.get<number>(`/api/users/new/count`).pipe(map((data) => data.data));
  }

  approveUser(id: number): Observable<number> {
    return this.dataService.post<number>(`/api/users/approve/${id}`, null).pipe(map((data) => data.data));
  }

  getLoggedUsers(): Observable<User[]> {
    return this.dataService.get<User[]>(`/api/users/logged`).pipe(map((data) => data.data));
  }

  public getUserByField(fieldType: string, fieldValue: any): Observable<User> {
    const params = new HttpParams()
      .set('fieldName', fieldType)
      .set('value', fieldValue);

    return this.dataService.get<User>(`/api/users/unique`, params).pipe(map((data) => data.data));
  }

  public deleteUsers(ids: number[]): Observable<ServerResp<any>> {
    let params = new HttpParams();
    ids.forEach(id => params = params.append('ids', `${id}`));
    return this.dataService.post('/api/users/delete', params);
  }

  logoutUser(): Observable<User[]> {
    return null;
  }

  private setUser(data: User): void {
    this.user = clone(data);
    this.user$.next(clone(data));
  }

  private copyOfUser(): User {
    return JSON.parse(JSON.stringify((this.user)));
  }
}
