import { CartItem } from './../../../shared/models/carts/cartItem';
import { CartServicesService } from './../../../shared/services/cart-services.service';
import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared/services/shared.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: []
})
export class HeaderComponent implements OnInit {

  cartItems: any
  cartItemsCount :any
  constructor(private sharedServices: SharedService,
  private cartServices:CartServicesService ) { }

  ngOnInit(): void {
    this.loadCartItems()

  }

    loadCartItems() {
      this.cartServices.getCartItems().subscribe((items :CartItem []) => {
      // console.log(items);
        this.cartItems = items;
        this.cartItemsCount = items.length;
        console.log(this.cartItemsCount);
        this.sharedServices.updateCartCount(this.cartItemsCount);

        })
      }
  }


