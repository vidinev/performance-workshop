import { Component } from '@angular/core';

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
      this.menu = [{
        title: 'Initial page load',
        route: ''
      }, {
        title: 'Main section',
        route: 'main'
      }, {
        title: 'Animations',
        route: ''
      }, {
        title: 'Link',
        route: ''
      }]
    }, 500);
  }
}
