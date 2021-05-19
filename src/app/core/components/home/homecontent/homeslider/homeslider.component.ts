import { debugOutputAstAsTypeScript } from '@angular/compiler';
import { Component, OnInit ,Input, Output, EventEmitter} from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ContactComponent } from '../../../contact/contact.component';

@Component({
  selector: 'app-homeslider',
  templateUrl: './homeslider.component.html',
  styleUrls: ['./homeslider.component.css'],
  providers: [  ]
})
export class HomesliderComponent implements OnInit {
  @Input()
  customOptions: OwlOptions = {

    items: 1,
    loop: true,
    autoplay: true,
    nav: true,
      dots: false,
      touchDrag: false,
      pullDrag: false,

    navText: ['<i class="fas fa-angle-left"></i>', '<i class="fas fa-angle-right"></i>'],
    responsive: {
      0: {
        items: 1,
        nav: true,
        loop: true,

      },
      600: {
        items: 1,
        nav:true,
        loop: true
      },
      1000: {
        items: 1,
        nav: true,
        loop: true
      }

    }
    }
  @Output()
  contactclick = new EventEmitter();
  public urlshop: string = '/shop';
  public urlcontact: string = '/contact';
  ngOnInit(): void {
  } @Output()
  visitshop(cd:ContactComponent) {
    console.log(this.urlshop);
  }
  @Output()
  visitcontact(cd:ContactComponent) {
    //console.log(this.urlcontact);
    this.contactclick.emit(this.urlcontact);
  }
}
