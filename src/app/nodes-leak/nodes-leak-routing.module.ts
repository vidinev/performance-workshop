import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NodesLeakComponent } from './nodes-leak.component';

const routes: Routes = [{
  path: '',
  component: NodesLeakComponent
}];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class NodesLeakRoutingModule { }
