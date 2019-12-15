import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimationSlowComponent } from './animation-slow.component';
import { AnimationSlowRoutingModule } from './animation-slow-routing.module';

@NgModule({
  declarations: [
    AnimationSlowComponent
  ],
  imports: [
    CommonModule,
    AnimationSlowRoutingModule
  ]
})
export class AnimationSlowModule { }
