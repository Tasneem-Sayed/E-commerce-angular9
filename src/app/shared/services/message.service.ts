import { product } from './../models/products/tproduct';
import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import{Subject,Observable} from 'rxjs'; //trick & listener
@Injectable({
  providedIn: 'root'
})
export class MessageService {

  trick = new Subject()

  constructor() { }
  sendMsg(product: any) {
    console.log(product)
    console.log(product.img)
    this.trick.next(product)  //triggring an event
  }
  getMsg() {
    return this.trick.asObservable()

  }
}
