import { ProductItemComponent } from './components/product-shop/product-item/product-item.component';
import { ShopModule } from './../shop/shop.module';
import { RouterModule } from '@angular/router';
import { CoreModule } from './../core/core.module';

import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { OurproductsComponent } from './components/ourproducts/ourproducts.component';
import { PtypesComponent } from './components/ourproducts/ptypes/ptypes.component';
import { SingleproComponent } from './components/ourproducts/ptypes/singlepro/singlepro.component';
import{CarouselModule} from 'ngx-owl-carousel-o';
import { from } from 'rxjs';
import { ProsuctListComponent } from './components/product-shop/prosuct-list/prosuct-list.component';
import { ProductShopComponent } from './components/product-shop/product-shop.component';
@NgModule({
  declarations: [OurproductsComponent, PtypesComponent, SingleproComponent, ProductItemComponent, ProsuctListComponent, ProductShopComponent],
  exports: [OurproductsComponent, PtypesComponent,ProsuctListComponent,SingleproComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    CarouselModule,
    RouterModule
  ]
})
export class ProductsModule { }
