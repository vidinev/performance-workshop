import { Component, OnInit } from '@angular/core';
import { WsNews } from './interfaces/news.interface';

@Component({
  selector: 'ws-load',
  templateUrl: './load.component.html',
  styleUrls: ['./load.component.scss']
})
export class LoadComponent implements OnInit {
  news: WsNews = {
    title: '',
    loading: true,
    items: [{ }, { }, { }, { }]
  };

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.news = {
        title: 'Some things for you',
        loading: false,
        items: [{
          title: 'Some title',
          date: 'Nov 12 2019',
          image: 'assets/images/igrushki-iolka-prazdnik.jpg',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor'
        }, {
          title: 'Example',
          date: 'Nov 13 2019',
          image: 'assets/images/merry-christmas-new-year-3950.jpg',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor'
        }, {
          title: 'Qwerty',
          date: 'Nov 14 2019',
          image: 'assets/images/novyi-god-vetki-shariki-sneg-lenta.jpg',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor'
        }, {
          title: 'Awesome title',
          date: 'Nov 15 2019',
          image: 'assets/images/igrushki-iolka-prazdnik.jpg',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor'
        }]
      } as WsNews;
    }, 500);
  }

}
