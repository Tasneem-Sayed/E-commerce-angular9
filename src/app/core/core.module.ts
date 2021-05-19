import { AuthenticationRoutingModule } from './../authentication/authentication-routing.module';
import { OurproductsComponent } from './../products/components/ourproducts/ourproducts.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { NewsModule } from './../news/news.module';

import { ShopModule } from './../shop/shop.module';
import { ProductsModule } from './../products/products.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreRoutingModule } from './core-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { FeaturelistComponent } from './components/home/homecontent/featurelist/featurelist.component';
import { HomelayoutComponent } from './components/homelayout/homelayout.component';
import { SearchareaComponent } from './components/home/homecontent/searcharea/searcharea.component';
import { HomesliderComponent } from './components/home/homecontent/homeslider/homeslider.component';
import { LogocarouselComponent } from './components/home/homecontent/logocarousel/logocarousel.component';
import { AboutComponent } from './components/about/about.component';
import { AboutcontentComponent } from './components/about/aboutcontent/aboutcontent.component';
import { AdvsectionComponent } from './components/about/aboutcontent/advsection/advsection.component';
import { ShopownerComponent } from './components/about/aboutcontent/shopowner/shopowner.component';
import { AboutusComponent } from './components/about/aboutcontent/aboutus/aboutus.component';
import { FeaturedsectionComponent } from './components/about/aboutcontent/featuredsection/featuredsection.component';
import { OurteamComponent } from './components/about/aboutcontent/ourteam/ourteam.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomecontentComponent } from './components/home/homecontent/homecontent.component';

import{CarouselModule} from 'ngx-owl-carousel-o'
import { BrowserModule } from '@angular/platform-browser';
import { LayoutcontactComponent } from './components/contact/components/layoutcontact/layoutcontact.component';
import { AuthenticationModule } from '../authentication/authentication.module';
import {MatTreeModule} from '@angular/material/tree';

@NgModule({
  declarations: [HeaderComponent,
    FooterComponent,
    HomeComponent,
    FeaturelistComponent,
    HomelayoutComponent,
    SearchareaComponent,
    HomesliderComponent,
    LogocarouselComponent,
    AboutComponent,
    AboutcontentComponent,
    AdvsectionComponent,
    ShopownerComponent,
    AboutusComponent,
    FeaturedsectionComponent,
    OurteamComponent,
    ContactComponent,
    HomecontentComponent,
    LayoutcontactComponent
   ],
  exports:[LogocarouselComponent ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    ProductsModule,
    ShopModule,
    CarouselModule,
    NgbModule,
    MatTreeModule,
   AuthenticationRoutingModule

  ]
})
export class CoreModule { }
