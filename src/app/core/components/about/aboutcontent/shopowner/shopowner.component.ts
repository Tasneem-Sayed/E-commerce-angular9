import { OwlOptions } from 'ngx-owl-carousel-o';
import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-shopowner',
  templateUrl: './shopowner.component.html',
  styleUrls: ['./shopowner.component.css']
})
export class ShopownerComponent implements OnInit {
  @Input()
  customOptions: OwlOptions = {

      // testimonial sliders

         items: 3,
         loop: true,
      autoplay: true,
         dots:false,
         responsive: {
              0: {
                 items: 1,
                 nav: false
             },
             600: {
                 items: 1,
                 nav: false
             },
             1000: {
                 items: 1,
                 nav: false,
                 loop: true
             }
         }



      }
  constructor() { }

  ngOnInit(): void {
  }

}
