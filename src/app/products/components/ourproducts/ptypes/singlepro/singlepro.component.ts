import { CartServicesService } from './../../../../../shared/services/cart-services.service';

import { ProductService } from './../../../../../shared/services/product.service';
import { MessageService } from './../../../../../shared/services/message.service';
import { product } from './../../../../../shared/models/products/tproduct';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-singlepro',
  templateUrl: './singlepro.component.html',
  styleUrls: ['./singlepro.component.css'],
  providers:[CartServicesService]
})
export class SingleproComponent implements OnInit {
  @Input() sProduct: product | any;


  // @Output()

  // notify=new EventEmitter();



  constructor(
    private msg: MessageService,
  private cartServices : CartServicesService) { }

  ngOnInit(): void {

  }

  addToCart() {
    this.cartServices.addProductsToCart(this.sProduct).subscribe(() => {
      console.log(this.sProduct);
      this.msg.sendMsg(this.sProduct);
    }
    )


}
  // SendNotify() {

  //   this.notify.emit (this.sProduct);
  // }
}
