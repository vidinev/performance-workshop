import { Component, OnInit } from '@angular/core';
import { CacheLeakService } from './cache-leak.service';

@Component({
  selector: 'ws-cache-leak',
  templateUrl: './cache-leak.component.html',
  styleUrls: ['./cache-leak.component.scss']
})
export class CacheLeakComponent implements OnInit {
  params = { top: 10, skip: 0, search: '' };
  items: any[] = [];

  get formattedCache() {
    return Object.keys(this.cacheLeakService.cache).map((key: string) => {
      return `${key} : ${JSON.stringify(this.cacheLeakService.cache[key])} \n`;
    });
  }

  constructor(public cacheLeakService: CacheLeakService) { }

  ngOnInit() {
  }

  search(text) {
    this.params.search = text as string;
    this.loadItems();
  }

  loadItems() {
    this.items = [];
    this.cacheLeakService.getItems(this.params)
      .subscribe((res) => this.items = res.items);
  }

}
