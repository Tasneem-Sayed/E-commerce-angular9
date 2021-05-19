import { MessageService } from './../shared/services/message.service';
import { ProductsModule } from './../products/products.module';
import { PtypesComponent } from './../products/components/ourproducts/ptypes/ptypes.component';

import { OurproductsComponent } from './../products/components/ourproducts/ourproducts.component';

import { LogocarouselComponent } from './../core/components/home/homecontent/logocarousel/logocarousel.component';
  import { HttpClientModule } from '@angular/common/http';

import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ShopRoutingModule } from './shop-routing.module';
import { CartbannerComponent } from './components/cartbanner/cartbanner.component';
import { ShopbannerComponent } from './components/shopbanner/shopbanner.component';
import { ShoplayoutComponent } from './components/shoplayout/shoplayout.component';
import { ShopHomeComponent } from './components/shoplayout/shop-home/shop-home.component';
import { CartComponent } from './components/shoplayout/shop-home/cart/cart.component';
import { FiltersComponent } from './components/shoplayout/shop-home/filters/filters.component';
import { CartItemComponent } from './components/shoplayout/shop-home/cart/cart-shop/cart-item/cart-item.component';
import { CartShopComponent } from './components/shoplayout/shop-home/cart/cart-shop/cart-shop.component';




@NgModule({
  declarations: [CartbannerComponent,
    ShopbannerComponent,
    ShoplayoutComponent,
    ShopHomeComponent,
    CartComponent,
    FiltersComponent,
    CartItemComponent,
    CartShopComponent],
 exports: [CartbannerComponent, ShopbannerComponent],
  imports: [
    CommonModule,
    ShopRoutingModule,
    RouterModule
   ,ProductsModule,
 HttpClientModule
   
  ],
  providers:[MessageService]
})
export class ShopModule { }
