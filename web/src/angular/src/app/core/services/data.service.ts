import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders, HttpParams} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {catchError, map} from "rxjs/operators";
import {ServerResp} from "../../model/server-resp";
import {HTTPMethod} from "../../model/ui/components/footer";
import {User} from "../../model/user";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) {
  }

  getCurrentUser(): Observable<User> {
    return this.get<User>(`/api/users/current_user`).pipe(map((data) => {
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

  get<T>(
    url: string,
    params?: HttpParams | {
      [param: string]: string | string[];
    }
  ): Observable<ServerResp<T>> {
    return this.http.get<T>(url, { params }).pipe(
      map((data: T) => ServerResp.forData<T>(data)),
      catchError((err: HttpErrorResponse) => of<ServerResp<T>>(ServerResp.withError<T>(err))),
    );
  }

  post<T>(url: string, body: any, options?: {
    headers?: HttpHeaders | {
      [header: string]: string | string[];
    };
    observe?: 'body';
    params?: HttpParams | {
      [param: string]: string | string[];
    };
    reportProgress?: boolean;
    responseType?: 'json';
    withCredentials?: boolean;
  }): Observable<ServerResp<T>> {
    return this.http.post<T>(url, body, options).pipe(
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
