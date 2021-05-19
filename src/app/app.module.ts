import { HttpClientModule } from '@angular/common/http';
import { PtypesComponent } from './products/components/ourproducts/ptypes/ptypes.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ProductsModule } from './products/products.module';
import { MaterialModule } from './material.module';
//import { FlexLayoutModule } from './@angular/flex-layout';

@NgModule({
  declarations: [
    AppComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule,
    CarouselModule, NgbModule, HttpClientModule,
    MaterialModule
    //, FlexLayoutModule
  ],
  exports: [

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
