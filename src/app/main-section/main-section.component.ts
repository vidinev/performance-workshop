import { Component, OnInit } from '@angular/core';
import { UtilsService } from '../shared/utils.service';

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
    this.pi = UtilsService.calculatePI();
  }

}
