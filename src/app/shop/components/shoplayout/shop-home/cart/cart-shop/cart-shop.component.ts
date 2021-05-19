
import { CartItem } from './../../../../../../shared/models/carts/cartItem';
import { Subscriber} from 'rxjs';
import { CartServicesService } from './../../../../../../shared/services/cart-services.service';
import { MessageService } from './../../../../../../shared/services/message.service';
import { product } from './../../../../../../shared/models/products/tproduct';
import { Component, OnInit ,Output,EventEmitter} from '@angular/core';
import { SharedService } from 'src/app/shared/services/shared.service';

@Component({
  selector: 'app-cart-shop',
  templateUrl: './cart-shop.component.html',
  styleUrls: ['./cart-shop.component.css'],
  providers:[CartServicesService]

})
export class CartShopComponent implements OnInit {
  cartItems : any = [ ];

  cartTotal = 0
  cartItemsCount=0
  constructor(
    private msg: MessageService,
    private cartServices: CartServicesService,
  private sharedServices:SharedService) { }

  ngOnInit() {
    this.subsribtion();
    this.loadCartItems();
    this.GetCartTotal();
  }

  subsribtion(){
   this.msg.getMsg().subscribe(( productpush: product | any) => {
    this.loadCartItems();
    // this.cartItems = this.loadCartItems.
   });

  }

  loadCartItems() {
  this.cartServices.getCartItems().subscribe((items :CartItem []) => {
//console.log(items);
    this.cartItems = items;

    this.cartItemsCount = items.length;
    this.sharedServices.updateCartCount(this.cartItemsCount);

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



