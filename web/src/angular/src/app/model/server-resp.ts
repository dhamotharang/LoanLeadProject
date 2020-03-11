import {HttpErrorResponse} from '@angular/common/http';

export class ServerResp<T> {

  constructor(public data: T, public err: HttpErrorResponse) {
  }

  static forData<T>(data: T): ServerResp<T> {
    return new ServerResp(data, undefined);
  }

  static withError<T>(err: HttpErrorResponse): ServerResp<T> {
    return new ServerResp(undefined, err);
  }
}
