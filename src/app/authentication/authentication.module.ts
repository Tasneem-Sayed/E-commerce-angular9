//import { MatSelectModule } from '@angular/material/select';
//import { LoginComponent } from './User/components/login/LoginComponent';
import { logging } from 'protractor';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { LoginComponent } from './User/components/login/login.component';

import { MatFormFieldModule } from '@angular/material/form-field';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { FlexLayoutModule } from '@angular/flex-layout';
//import { MatTreeModule } from '@angular/material/tree';
import { ComponentsComponent } from './User/components/components.component';
import { RegistrationComponent } from './User/components/registration/registration.component';
@NgModule({
  declarations: [LoginComponent, ComponentsComponent, RegistrationComponent],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    MatFormFieldModule,
  //  MatTreeModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,MatSidenavModule
    , MatListModule,
    FlexLayoutModule,
    //MatSelectModule
  ],
  exports: [
    LoginComponent
  ]
})
export class AuthenticationModule { }
