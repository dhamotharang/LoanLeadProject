import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {EimComponentModel} from "../../model/component";
import {ProductsService} from "../../core/services/products.service";

@Component({
  selector: 'eim-sidebar-products',
  templateUrl: './sidebar-products.component.html',
  styleUrls: ['./sidebar-products.component.scss']
})
export class SidebarProductsComponent implements OnInit {
  products$: Observable<EimComponentModel[]>;

  constructor(private productsService: ProductsService) {
  }

  ngOnInit(): void {
    this.products$ = this.productsService.getProducts();
  }

}
