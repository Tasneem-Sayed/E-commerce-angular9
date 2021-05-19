import { Component, OnInit,Input } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-logocarousel',
  templateUrl: './logocarousel.component.html',
  styleUrls: ['./logocarousel.component.css']
})
export class LogocarouselComponent implements OnInit {
  @Input()
  customOptions: any = {
    items: 4,
            loop: true,
            autoplay: true,
      margin: 30,
      dots: false,
            responsive: {
                0: {
                    items: 1,
                    nav: false
                },
                600: {
                    items: 3,
                    nav: false
                },
                1000: {
                    items: 4,
                    nav: false,
                    loop: true
                }
            }

  }
  constructor() { }

  ngOnInit(): void {
  }

}
