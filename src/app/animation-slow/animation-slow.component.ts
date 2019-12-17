import { Component, OnDestroy, OnInit } from '@angular/core';
import { UtilsService } from '../shared/utils.service';

@Component({
  selector: 'ws-animation-slow',
  templateUrl: './animation-slow.component.html',
  styleUrls: ['./animation-slow.component.scss']
})
export class AnimationSlowComponent implements OnInit, OnDestroy {
  pi: number;
  bars: number[] = [];
  timer;
  power: number =  10;
  itemsCount: number = 16;

  constructor() { }

  ngOnInit() {
    this.fillArray();
  }

  ngOnDestroy(): void {
    clearInterval(this.timer);
  }

  trackByIndex(index) {
    return index;
  }

  calculatePI() {
    this.pi = UtilsService.calculatePI(this.power * 1000000);
  }

  start() {
    this.stop();
    this.timer = setInterval(() => {
      this.bars = this.bars.map(() => Math.round(Math.random() * 30))
    }, 800);
  }

  stop() {
    if (this.timer) {
      clearInterval(this.timer)
    }
  }

  fillArray(count: any = this.itemsCount) {
    this.bars = new Array(+count);
    this.bars.fill(0);
  }

}
