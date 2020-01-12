import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { UtilsService } from '../shared/utils.service';

@Component({
  selector: 'ws-scrolling',
  templateUrl: './scrolling.component.html',
  styleUrls: ['./scrolling.component.scss']
})
export class ScrollingComponent implements OnInit {
  items: number[] = [];
  calc = false;

  constructor(@Inject(DOCUMENT) private document: Document) { }

  ngOnInit() {
    this.items = (new Array(100)).fill(0);

    this.document.addEventListener('scroll', () => {
      if (this.calc) {
        UtilsService.calculatePI(10000000);
      }
      this.items = this.items.map(() => Math.round(Math.random() * 500))
    });
  }

  calcOn() {
    this.calc = !this.calc;
  }

  trackByIndex(index) {
    return index;
  }

}
