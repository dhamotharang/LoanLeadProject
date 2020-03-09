import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {EimComponentModel} from "../../model/component";
import {DataService} from "./data.service";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private dataService: DataService) {
  }

  getProducts(): Observable<EimComponentModel[]> {
    return this.dataService.get<EimComponentModel[]>('/eim/api/products').pipe(map((data) => {
      return data.data || [];
    }));
  }
}
