import { ProductItemComponent } from './components/product-shop/product-item/product-item.component';
import { CartComponent } from './../shop/components/shoplayout/shop-home/cart/cart.component';

import { PtypesComponent } from './components/ourproducts/ptypes/ptypes.component';
import { OurproductsComponent } from './components/ourproducts/ourproducts.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '/cart' ,component:CartComponent},
  {

    path: 'ptypes', component: PtypesComponent,
    children: [
      {
        path: 'productitem', component: ProductItemComponent,
    children:[]  },
    ]
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
