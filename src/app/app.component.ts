import { Component } from '@angular/core';
import { mainRoutes } from './app-routing.module';

@Component({
  selector: 'ws-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  title = '';
  menu = [];


  constructor() {
    setTimeout(() => {
      this.title = 'Performance workshop';
      this.menu = mainRoutes;
      }, 500);
  }
}
