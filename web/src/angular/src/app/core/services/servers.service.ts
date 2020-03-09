import {Injectable} from '@angular/core';
import {DataService} from "./data.service";
import {BehaviorSubject, Observable} from "rxjs";
import {EimServerModel} from "../../model/servers/server-model";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ServersService {

  private _serversSubject: BehaviorSubject<EimServerModel[]>;

  constructor(private dataService: DataService) {
  }

  private getServersSubject(): BehaviorSubject<EimServerModel[]> {
    if (!this._serversSubject) {
      this._serversSubject = new BehaviorSubject<EimServerModel[]>([]);
    }
    this.refreshServers();
    return this._serversSubject;
  }

  private refreshServers() {
    this.dataService.get<EimServerModel[]>('/eim/api/servers').pipe(map((data) => {
      return data.data;
    })).subscribe((data) => {
      this._serversSubject.next(data);
    });
  }

  getServers(): Observable<EimServerModel[]> {
    return this.getServersSubject()
  }

  testServer(host: string, username: string, password: string): Observable<string> {
    const dto = {host, username, password};
    return this.dataService.post<string>('/eim/api/servers/test', dto).pipe(map((data) => {
      return data.data;
    }));
  }

  removeServer(serverId: string): Observable<void> {
    return this.dataService.delete<void>('/eim/api/servers/' + serverId).pipe(map((data) => {
      this.refreshServers();
      return data.data;
    }));
  }
}
