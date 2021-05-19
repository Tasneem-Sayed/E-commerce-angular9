import { CartItem } from './../../../../../../../shared/models/carts/cartItem';
import { CartServicesService } from './../../../../../../../shared/services/cart-services.service';
import { ProductService } from './../../../../../../../shared/services/product.service';
import { product } from './../../../../../../../shared/models/products/tproduct';
import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {

  @Input()
  cartItem: any
  defaultQty = 1;
  products: product[] = [];


  constructor(private ProductService: ProductService,
  private  cartServices :CartServicesService) { }

  ngOnInit(): void {
    // this.onAddQuantity();

  }
}
