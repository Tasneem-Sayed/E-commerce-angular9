import { OurproductsComponent } from './../products/components/ourproducts/ourproducts.component';
import { CartComponent } from './components/shoplayout/shop-home/cart/cart.component';
import { ShoplayoutComponent } from './components/shoplayout/shoplayout.component';
import { CartbannerComponent } from './components/cartbanner/cartbanner.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShopbannerComponent } from './components/shopbanner/shopbanner.component';
import { ShopHomeComponent } from './components/shoplayout/shop-home/shop-home.component';


const routes: Routes = [
  {
    path: '', component: ShopHomeComponent,
    children: [
      { path: 'shop', component: CartbannerComponent },
      { path: 'cartbanner', component: CartbannerComponent },
      { path: 'shopbanner', component: ShopbannerComponent },
      { path: 'product', loadChildren: () => import('../products/products.module').then(m => m.ProductsModule) },

      ]

  }, { path: 'cart', component: CartComponent },


  ];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopRoutingModule { }
