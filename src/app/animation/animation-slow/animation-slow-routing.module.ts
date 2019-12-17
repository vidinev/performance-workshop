import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimationSlowComponent } from './animation-slow.component';

const routes: Routes = [{
  path: '',
  component: AnimationSlowComponent
}];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AnimationSlowRoutingModule { }
