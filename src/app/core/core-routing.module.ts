import { AuthenticationRoutingModule } from './../authentication/authentication-routing.module';
import { AuthenticationModule } from './../authentication/authentication.module';
import { logging } from 'protractor';
import { CartComponent } from './../shop/components/shoplayout/shop-home/cart/cart.component';
import { ProductItemComponent } from '../products/components/product-shop/product-item/product-item.component';
import { LogocarouselComponent } from './components/home/homecontent/logocarousel/logocarousel.component';
import { ShopModule } from './../shop/shop.module';
import { ProductsModule } from './../products/products.module';
import { NewsModule } from './../news/news.module';
import { ContactComponent } from './components/contact/contact.component';
import { AboutcontentComponent } from './components/about/aboutcontent/aboutcontent.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HomelayoutComponent } from './components/homelayout/homelayout.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from '../authentication/User/components/login/login.component';
import { RegistrationComponent } from '../authentication/User/components/registration/registration.component';


const routes: Routes = [
  {
    path: '', component: HomelayoutComponent,
    children: [
      {path: 'home', component: HomeComponent,},
      { path: 'about', component:AboutComponent },
      { path: 'contact', component: ContactComponent },
      {path: 'productitem', component: ProductItemComponent, },
      { path: 'cart', component: CartComponent, },
      { path: 'news', loadChildren: () => import('../news/news.module').then(m => m.NewsModule) },
      { path: 'product', loadChildren: () => import('../products/products.module').then(m => m.ProductsModule) },
      { path: 'shop', loadChildren: () => import('../shop/shop.module').then(m => m.ShopModule) },

      { path: 'login', component: LoginComponent },
      {path:'registration',component:RegistrationComponent}
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes),
    NgbModule],
  exports: [RouterModule,ProductsModule]
})
export class CoreRoutingModule { }
