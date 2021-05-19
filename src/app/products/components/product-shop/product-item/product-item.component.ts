import { MessageService } from './../../../../shared/services/message.service';
import { product } from '../../../../shared/models/products/tproduct';
import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
  providers:[MessageService]
})
export class ProductItemComponent implements OnInit {

  @Input()

  href: string = '/cart';
    itemdetail = {
    img: '../assets/img/products/product-img-5.jpg',
    path: 'product/productitem',
    name:'Green apples have polyphenols',
    price: 50,
  desricption: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta sint dignissimos, rem commodi cum voluptatem quae reprehenderit repudiandae ea tempora incidunt ipsa, quisquam animi perferendis eos eum modi! Tempora, earum',
    quantity:0

}

  @Output()
  notify=new EventEmitter();

  constructor(private msg:MessageService) { }

  ngOnInit(): void {
  }

  SendNotification() {
    this.notify.emit(this.itemdetail);
  }
}
