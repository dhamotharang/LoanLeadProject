import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ProductsService} from "../../core/services/products.service";
import {EimComponentModel} from "../../model/component";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";

@Component({
  selector: 'eim-add-server-product',
  templateUrl: './add-server-product.component.html',
  styleUrls: ['./add-server-product.component.scss']
})
export class AddServerProductComponent implements OnInit {

  products$: Observable<EimComponentModel[]>;
  description: string;

  @Output()
  configsChange: EventEmitter<any> = new EventEmitter<any>();

  constructor(private productsService: ProductsService) {
  }

  ngOnInit(): void {
    this.products$ = this.productsService.getProducts().pipe(map((data) => {
      console.log('Products', data);
      return data;
    }));
  }

  productSelect(product: EimComponentModel) {
    console.log('product select', product);
    this.configsChange.emit(product);
  }

  labelClick(product: EimComponentModel) {
    this.description = product.description;
  }
}
