
import { ProductService } from './../../../../shared/services/product.service';
import { product } from './../../../../shared/models/products/tproduct';
import { Component, Input, OnInit } from '@angular/core';
import { OwlOptions, SlidesOutputData } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-ptypes',
  templateUrl: './ptypes.component.html',
  styleUrls: ['./ptypes.component.css']
})
export class PtypesComponent implements OnInit {
   @Input()
   Singleproduct: product[] = [];

  // mySlideImg = [this.Singleproduct];
  // myCarouselImage = [this.Singleproduct];
  // mySlideOptions = {
  //   items: 1,
  //   dots: true,
  //   nav:true
  // }
  // myCarsoulOptions = {
  //   items: 3,
  //   dots: true,
  //   nav:true
  // }



  @Input()

  customOptions = {

    loop: true,
    autoplay: true,

      nav: true,
      navText:['',''],
      dots: false,

    responsive: {
      0: {
        items: 1,
        nav: true
      },
      400: {
        items: 2,
        nav:true
      },
      740: {
        items: 3,
        nav: true,
      }
      ,
      940: {
        items: 4,
        nav: true,
      }

    }
  }

  constructor(private ProductService:ProductService) { }

  // ngOnInit(): void {
  //   //this.products =this.ProductService.getproducts()
  //   this.ProductService.getproducts().subscribe((productlist) => {
  //     this.products = productlist;
  //     console.log(productlist);
  //   })
  // }
  ngOnInit(): void {
    // console.log(this.ProductService.getproducts());
    // //this.products =this.ProductService.getproducts() becausethis is observal doing the follwing
    // this.ProductService
    //   .getproducts()
    //   .subscribe(
    //     (productlist) => {
    //   this.products [] = productlist;
    //   console.log(productlist);
    // })
    this.ProductService.getproducts().subscribe((Products) => {
      this.Singleproduct = Products;
      // this.customOptions = productsUrl;
    })

  }

  GetNotify (event: product) {
    console.log(event);

  }
  getPassedData(data:SlidesOutputData){}

}
