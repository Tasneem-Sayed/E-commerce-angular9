import { RouterModule } from '@angular/router';
import { SharedModule } from './../shared/shared.module';
import { CoreModule } from './../core/core.module';
import { LogocarouselComponent } from './../core/components/home/homecontent/logocarousel/logocarousel.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { NewsRoutingModule } from './news-routing.module';
import { HomenewsComponent } from './components/homenews/homenews.component';
import { NewscontentComponent } from './components/homenews/newscontent/newscontent.component';
import { SingleNewsComponent } from './components/homenews/newscontent/single-news/single-news.component';
import { PomegranateComponent } from './components/homenews/newscontent/single-news/Pomegranate/pomegranate.component';


@NgModule({
  declarations: [HomenewsComponent, NewscontentComponent, SingleNewsComponent, PomegranateComponent],
  exports: [],
  imports: [
    CommonModule,
    NewsRoutingModule,
    RouterModule,
    SharedModule
  ]
})
export class NewsModule { }
