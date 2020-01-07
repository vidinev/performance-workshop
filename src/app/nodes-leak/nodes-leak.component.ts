import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ws-nodes-leak',
  templateUrl: './nodes-leak.component.html',
  styleUrls: ['./nodes-leak.component.scss']
})
export class NodesLeakComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  start() {
    const x = [];
    x.push(new Array(1000000).join('x'));
    NodesLeakComponent.createSomeNodes();
    setTimeout(() => this.start(), 1000);
  }

  private static createSomeNodes() {
    let div,
      i = 100,
      frag = document.createDocumentFragment();
    for (; i > 0; i--) {
      div = document.createElement('div');
      div.appendChild(document.createTextNode(i + ' - ' + new Date().toTimeString()));
      frag.appendChild(div);
    }
    document.getElementById('nodes').appendChild(frag);
  }

}
