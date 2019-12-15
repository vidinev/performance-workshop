import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ws-main-section',
  templateUrl: './main-section.component.html',
  styleUrls: ['./main-section.component.scss']
})
export class MainSectionComponent implements OnInit {
  pi: number;

  constructor() { }

  ngOnInit() {
  }

  calculatePI() {
    const iterations = 50000000;
    let pi = 0;
    let n = 1;
    for (let i = 0; i <= iterations; i++)
    {
      pi = pi + (4 / n) - (4 / (n + 2));
      n = n + 4
    }
    this.pi = pi;
  }

}
