import { Component } from '@angular/core';

@Component({
  selector: 'ws-nodes-leak',
  templateUrl: './nodes-leak.component.html',
  styleUrls: ['./nodes-leak.component.scss']
})
export class NodesLeakComponent {
  leakedNodes = [];

  createNodes() {
    this.createLeakedNodes();
    this.createGCNodes();
  }

  private static createNode(text) {
    const div = document.createElement('div');
    const innerDiv = document.createElement('div');
    innerDiv.appendChild(document.createTextNode(`${text} - ${new Date().toTimeString()}`));
    div.appendChild(innerDiv);
    return div;
  }

  private createGCNodes() {
    for (let i = 0; i < 500; i++) {
       const node = NodesLeakComponent.createNode(`Garbage Collected: + ${i}`);
       document.body.appendChild(node);
       setTimeout(() => node.remove(), 500);
    }
  }

  private createLeakedNodes() {
    for (let i = 0; i < 500; i++) {
      const node = NodesLeakComponent.createNode(`Leaked: + ${i}`);
      document.body.appendChild(node);
      this.leakedNodes.push(node);
      setTimeout(() => node.remove(), 500);
    }
  }

}
