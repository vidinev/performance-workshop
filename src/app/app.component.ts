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
        title: 'Initial page load'
      }, {
        title: 'Animations'
      }, {
        title: 'Link'
      }]
    }, 500)
  }
}
