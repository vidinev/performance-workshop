import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimationFastComponent } from './animation-fast.component';
import { AnimationFastRoutingModule } from './animation-fast-routing.module';

@NgModule({
  declarations: [AnimationFastComponent],
  imports: [
    AnimationFastRoutingModule,
    CommonModule
  ]
})
export class AnimationFastModule { }
