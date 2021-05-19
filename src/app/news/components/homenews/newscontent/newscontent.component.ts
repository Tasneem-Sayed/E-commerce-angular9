import { Ndata } from './models/ndata';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-newscontent',
  templateUrl: './newscontent.component.html',
  styleUrls: ['./newscontent.component.css']
})
export class NewscontentComponent implements OnInit {
@Input()
  data:Ndata[] = [
    new  Ndata('You will vainly look for fruit on it in autumn.','Admin','27 December, 2019','Vivamus lacus enim, pulvinar vel nulla sed, scelerisque rhoncus nisi. Praesent vitae mattis nunc, egestas viverra eros.','homenews/newscontent/single-news/Pomegranate','../../assets/img/latest-news/news-bg-1.jpg'),
    new  Ndata('A man  worth has its season, like tomato.','Admin','27 December, 2019','Vivamus lacus enim, pulvinar vel nulla sed, scelerisque rhoncus nisi. Praesent vitae mattis nunc, egestas viverra eros.','homenews/newscontent/single-news/Pomegranate','../../assets/img/latest-news/news-bg-2.jpg'),
      new  Ndata(
        'You will vainly look for fruit on it in autumn.',
        'Admin',
        '27 December, 2019',
        'Vivamus lacus enim, pulvinar vel nulla sed, scelerisque rhoncus nisi. Praesent vitae mattis nunc, egestas viverra eros.',
       'homenews/newscontent/single-news/Pomegranate',
        '../../assets/img/latest-news/news-bg-3.jpg'),
        new Ndata(
          'You will vainly look for fruit on it in autumn.',
          'Admin',
          '27 December, 2019',
          'Vivamus lacus enim, pulvinar vel nulla sed, scelerisque rhoncus nisi. Praesent vitae mattis nunc, egestas viverra eros.',
          'homenews/newscontent/single-news/Pomegranate',
          '../../assets/img/latest-news/news-bg-1.jpg'),
            new Ndata(
              'A man  worth has its season, like tomato.',
              'Admin',
              '27 December, 2019',
              'Vivamus lacus enim, pulvinar vel nulla sed, scelerisque rhoncus nisi. Praesent vitae mattis nunc, egestas viverra eros.',
             'homenews/newscontent/single-news/Pomegranate',
             '../../assets/img/latest-news/news-bg-2.jpg'),
            new Ndata(
              'You will vainly look for fruit on it in autumn.',
              'Admin',
              '27 December, 2019',
              'Vivamus lacus enim, pulvinar vel nulla sed, scelerisque rhoncus nisi. Praesent vitae mattis nunc, egestas viverra eros.',
             'homenews/newscontent/single-news/Pomegranate',
             '../../assets/img/latest-news/news-bg-3.jpg'),


  ]

  constructor() { }

  ngOnInit(): void {
  }

}
