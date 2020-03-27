import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {DataService} from "./data.service";
import {Observable} from "rxjs";
import {Role} from "../../model/role";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  constructor(
    private http: HttpClient,
    private dataService: DataService
  ) { }

  getAllRoles(): Observable<Role[]> {
    return this.dataService.get<Role[]>(`/api/roles`).pipe(map((data) => data.data));
  }
}
