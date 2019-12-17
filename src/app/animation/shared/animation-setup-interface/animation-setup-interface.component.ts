import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { UtilsService } from '../../../shared/utils.service';

const interval = 1000;

@Component({
  selector: 'ws-animation-setup-interface',
  templateUrl: './animation-setup-interface.component.html',
  styleUrls: ['./animation-setup-interface.component.scss']
})
export class AnimationSetupInterfaceComponent implements OnInit, OnDestroy {
  pi: number;
  items: number[] = [];
  timer;
  power: number =  10;
  itemsCount: number = 16;
  @Output() itemsUpdated: EventEmitter<number[]> = new EventEmitter<number[]>();

  constructor() { }

  ngOnInit() {
    this.fillArray();
  }

  ngOnDestroy(): void {
    clearInterval(this.timer);
  }

  calculatePI() {
    this.pi = UtilsService.calculatePI(this.power * 1000000);
  }

  start() {
    this.stop();
    this.timer = setInterval(() => {
      this.items = this.items.map(() => Math.round(Math.random() * 30));
      this.itemsUpdated.emit(this.items);
    }, interval);
  }

  stop() {
    if (this.timer) {
      clearInterval(this.timer)
    }
  }

  fillArray(count: any = this.itemsCount) {
    this.items = new Array(+count);
    this.items.fill(0);
    this.itemsUpdated.emit(this.items);
  }

}
