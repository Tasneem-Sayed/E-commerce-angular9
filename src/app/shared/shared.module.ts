import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreloaderComponent } from './components/preloader/preloader.component';



@NgModule({
  declarations: [PreloaderComponent],
  exports: [PreloaderComponent],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
