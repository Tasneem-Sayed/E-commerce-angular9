import { PomegranateComponent } from './components/homenews/newscontent/single-news/Pomegranate/pomegranate.component';
import { NewscontentComponent } from './components/homenews/newscontent/newscontent.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomenewsComponent } from './components/homenews/homenews.component';


const routes: Routes = [
  {
    path: '', component: HomenewsComponent,
    children: [
      { path: 'news', component: NewscontentComponent }
    ]
  }
  ,

  { path: 'homenews/newscontent/single-news/Pomegranate', component: PomegranateComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewsRoutingModule { }
