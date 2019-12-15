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

  constructor() { }

  ngOnInit() {
    this.bars = new Array(50);
    this.bars.fill(100);
  }

  ngOnDestroy(): void {
    clearInterval(this.timer);
  }

  trackByIndex(index) {
    return index;
  }

  calculatePI() {
    this.pi = UtilsService.calculatePI();
  }

  start() {
    this.stop();
    this.timer = setInterval(() => {
      this.bars = this.bars.map(() => Math.round(Math.random() * 100))
    }, 250);
  }

  stop() {
    if (this.timer) {
      clearInterval(this.timer)
    }
  }

}
