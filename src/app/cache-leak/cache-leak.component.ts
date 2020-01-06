import { Component, OnInit } from '@angular/core';
import { CacheLeakService } from './cache-leak.service';

@Component({
  selector: 'ws-cache-leak',
  templateUrl: './cache-leak.component.html',
  styleUrls: ['./cache-leak.component.scss']
})
export class CacheLeakComponent implements OnInit {
  params = { top: 10, skip: 0 };
  items: any[] = [];

  constructor(public cacheLeakService: CacheLeakService) { }

  ngOnInit() {
  }

  loadItems() {
    this.items = [];
    this.cacheLeakService.getItems(this.params)
      .subscribe((res) => this.items = res.items);
  }

}
