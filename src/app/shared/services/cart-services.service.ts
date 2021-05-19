//import { cartUrl } from './../models/config/api';

import { product } from './../models/products/tproduct';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CartItem } from '../models/carts/cartItem';

import { map } from 'rxjs/Operators';
 const apiUrl = ' http://localhost:3000/cart';
//const apiUrl = 'http://localhost:52297/api/CartItems';
@Injectable({
  providedIn: 'root'
})
export class CartServicesService {


  constructor(private http: HttpClient) { }
  getCartItems(): Observable<CartItem[]>   //mapping result to our cartitem prop( pipe and map )
  {
    return this.http.get<CartItem[]>(apiUrl).pipe(   //pipe result to cart components
      map((result: any[]) => {
        let cartItems: CartItem[] = [];
        let Product: product[] = [];

        for (let item of result) {

          let productExists = false

          for (let i in cartItems) {

         console.log(item.products.id);
          if (cartItems[i].productID === item.products.id) {

            cartItems[i].quantity++
            productExists = true
            break;
          }
 }

        if (!productExists) {
          cartItems.push( new CartItem(item.id,item.products,item.quantity))}}


        return cartItems;

    })

      );
  }


  addProductsToCart(products: product): Observable < any > //return {id:1 , products}
      {console.log("cart");
        return this.http.post(apiUrl, { products });

  }


  }

