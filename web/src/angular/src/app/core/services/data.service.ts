import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {catchError, map} from "rxjs/operators";
import {ServerResp} from "../../model/server-resp";
import {HTTPMethod} from "../../model/ui/components/footer";
import {EimEnvironmentModel} from "../../model/environment/environment";
import {EimResourceModel} from "../../model/component";
import {EimUiConfigModel} from "../../model/eim-ui-config";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) {
  }

  getEnvironment(): Observable<EimEnvironmentModel> {
    return this.get<EimEnvironmentModel>(`/eim/api/environment`).pipe(map((data) => {
      return data.data;
    }));
  }

  getWorkspace(): Observable<EimUiConfigModel> {
    return this.get<EimUiConfigModel>(`assets/mock/workspace.json`).pipe(map((data) => {
      return data.data;
    }));
  }

  getOptionalResources(): Observable<EimResourceModel[]> {
    return this.get<EimResourceModel[]>('/eim/api/resources/optional').pipe(map((data) => {
      return data.data || [];
    }));
  }

  getResources(): Observable<EimResourceModel[]> {
    return this.get<EimResourceModel[]>(`/eim/api/resources`).pipe(map((data) => {
      return data.data || [];
    }));
  }

  saveEnvironment(environment: EimEnvironmentModel): Observable<EimEnvironmentModel> {
    return this.post<EimEnvironmentModel>('/eim/api/environment', environment).pipe(map((data) => {
      return data.data;
    }));
  }

  performAction<T>(method: HTTPMethod, url: string, data: any): Observable<T> {
    let resp: Observable<ServerResp<T>>;
    switch (method) {
      case HTTPMethod.GET:
        resp = this.get<T>(url);
        break;
      case HTTPMethod.POST:
        resp = this.post<T>(url, data);
        break;
      case HTTPMethod.PUT:
        resp = this.put<T>(url, data);
        break;
      case HTTPMethod.PATCH:
        resp = this.patch<T>(url, data);
        break;
      case HTTPMethod.DELETE:
        resp = this.delete<T>(url);
      default:
        throw `Http method '${method}' not supported`;
    }
    return resp.pipe(map((data) => {
      return data.data;
    }));
  }

  get<T>(url: string): Observable<ServerResp<T>> {
    return this.http.get<T>(url).pipe(
      map((data: T) => ServerResp.forData<T>(data)),
      catchError((err: HttpErrorResponse) => of<ServerResp<T>>(ServerResp.withError<T>(err))),
    );
  }

  post<T>(url: string, body: any): Observable<ServerResp<T>> {
    return this.http.post<T>(url, body).pipe(
      map((data: T) => ServerResp.forData<T>(data)),
      catchError((err: HttpErrorResponse) => of<ServerResp<T>>(ServerResp.withError<T>(err)))
    );
  }

  put<T>(url: string, body: any): Observable<ServerResp<T>> {
    return this.http.put<T>(url, body).pipe(
      map((data: T) => ServerResp.forData<T>(data)),
      catchError((err: HttpErrorResponse) => of<ServerResp<T>>(ServerResp.withError<T>(err)))
    );
  }

  patch<T>(url: string, body: any): Observable<ServerResp<T>> {
    return this.http.patch<T>(url, body).pipe(
      map((data: T) => ServerResp.forData<T>(data)),
      catchError((err: HttpErrorResponse) => of<ServerResp<T>>(ServerResp.withError<T>(err)))
    );
  }

  delete<T>(url: string): Observable<ServerResp<T>> {
    return this.http.delete<T>(url).pipe(
      map((data: T) => ServerResp.forData<T>(data)),
      catchError((err: HttpErrorResponse) => of<ServerResp<T>>(ServerResp.withError<T>(err))),
    );
  }
}
