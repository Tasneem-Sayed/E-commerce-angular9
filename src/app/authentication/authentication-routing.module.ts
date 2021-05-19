import { RegistrationComponent } from './User/components/registration/registration.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './User/components/login/login.component';
const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {path:'registration',component:RegistrationComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule {

 }
