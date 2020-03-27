import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {Entity} from "../../model/entity";
import {map} from "rxjs/operators";
import {DataService} from "./data.service";
import {ServerResp} from "../../model/server-resp";

@Injectable({
  providedIn: 'root'
})
export class EntityService {

  constructor(
    private http: HttpClient,
    private dataService: DataService
  ) { }

  getEntity(id: number) {
    return this.dataService.get<Entity>(`/api/entities/${id}`).pipe(map((data) => data.data));
  }

  getAllEntities(): Observable<Entity[]> {
    return this.dataService.get<Entity[]>(`/api/entities/all`).pipe(map((data) => data.data))
  }

  getEntities(page, itemsPerPage): Observable<Entity[]> {
    let params = new HttpParams()
      .set('page', page)
      .set('itemsPerPage', itemsPerPage);
    return this.dataService.get<Entity[]>(`/api/entities`, params).pipe(map((data) => data.data))
  }

  getEntitiesCount(): Observable<number> {
    return this.dataService.get<number>(`/api/entities/count`).pipe(map((data) => data.data));
  }

  save(entity: Entity): Observable<Entity> {
    return this.dataService.post<Entity>('/api/entities', entity).pipe(map((data) => data.data));
  }

  public getEntityByField(fieldType: string, fieldValue: any): Observable<Entity> {
    let params = new HttpParams()
      .set("fieldName", fieldType)
      .set('value', fieldValue);

    return this.dataService.get<Entity>(`/api/entities/unique`, params).pipe(map((data) => data.data));
  }

  public deleteEntities(ids: number[]): Observable<ServerResp<any>> {
    let params = new HttpParams();
    ids.forEach(id => params = params.append('ids', `${id}`));
    return this.dataService.post('/api/entities/delete', params);
  }
}
