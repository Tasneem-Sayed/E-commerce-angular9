
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http'
import { HttpClientRoutingModule } from './http-client-routing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientRoutingModule,
    HttpClientModule
  ]
})
export class HttpclientModule { }
