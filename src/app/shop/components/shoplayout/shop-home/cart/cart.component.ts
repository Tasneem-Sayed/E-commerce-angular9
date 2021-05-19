import { CartItem } from './../../../../../shared/models/carts/cartItem';
import { CartServicesService } from './../../../../../shared/services/cart-services.service';
import { ProductService } from './../../../../../shared/services/product.service';
import { product } from './../../../../../shared/models/products/tproduct';
import { Component, OnInit, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: any
  defaultQuantity: number = 1;
  ProductAddToCart: product[] = [];
  cartTotal = 0
  constructor(private cartServices: CartServicesService) { }

  ngOnInit(): void {
    this.loadCartItems();

  }
  loadCartItems() {
    this.cartServices.getCartItems().subscribe((items :CartItem []) => {
    // console.log(items);
      this.cartItems = items;
      this.GetCartTotal();
      })
    }

  GetCartTotal() {
    this.cartTotal = 0;
    this.cartItems.forEach((item:any) => {
      this.cartTotal += ( item.quantity  * item.price );
      // console.log(this.cartTotal)
      // return this.cartTotal += (item.qty * item.proprice);
    });
  }
}


