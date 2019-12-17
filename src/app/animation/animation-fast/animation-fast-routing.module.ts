import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimationFastComponent } from './animation-fast.component';

const routes: Routes = [{
  path: '',
  component: AnimationFastComponent
}];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AnimationFastRoutingModule { }
