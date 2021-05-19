import { Ndata } from './../models/ndata';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-single-news',
  templateUrl: './single-news.component.html',
  styleUrls: ['./single-news.component.css']
})
export class SingleNewsComponent implements OnInit {
@Input()
  newsdata: Ndata = {
    headerNews: 'You will vainly look for fruit on it in autumn.',
    author: 'Admin',
    date: '27 December, 2019',
    description: 'Vivamus lacus enim, pulvinar vel nulla sed, scelerisque rhoncus nisi. Praesent vitae mattis nunc, egestas viverra eros.',
    snHref: 'homenews/newscontent/single-news/Pomegranate',
    img:'../../assets/img/latest-news/news-bg-1.jpg'
};



  constructor() { }

  ngOnInit(): void {
  }
@Input()
  visitnews()
  { console.log(this.newsdata.snHref); }
}
