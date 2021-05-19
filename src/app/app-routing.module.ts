import { HomeComponent } from './core/components/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const routes: Routes = [{
  path: '', loadChildren: () => import('./core/core.module').then(m => m.CoreModule),
  // children: [
  //   {path: 'home', component: HomeComponent}
  // ]
}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
