import { product } from './../../../../shared/models/products/tproduct';
import { ProductService } from './../../../../shared/services/product.service';
import { CartServicesService } from './../../../../shared/services/cart-services.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-prosuct-list',
  templateUrl: './prosuct-list.component.html',
  styleUrls: ['./prosuct-list.component.css'],
  // providers:[ProductService,]
})
export class ProsuctListComponent implements OnInit {

  products: product [] = [];
  constructor(private ProductService: ProductService, private  CartServicesService: CartServicesService) {

   }

  ngOnInit(): void {

    this.ProductService.getproducts().subscribe((products) => {
      this.products = products;
    })


  }


}
