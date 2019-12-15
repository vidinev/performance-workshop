import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { WsNews } from '../interfaces/news.interface';

@Component({
  selector: 'ws-news-block',
  templateUrl: './news-block.component.html',
  styleUrls: ['./news-block.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewsBlockComponent implements OnInit {
  @Input() news: WsNews;

  constructor() { }

  ngOnInit() {
  }

}
