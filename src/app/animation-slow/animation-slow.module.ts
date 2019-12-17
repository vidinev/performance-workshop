import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimationSlowComponent } from './animation-slow.component';
import { AnimationSlowRoutingModule } from './animation-slow-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AnimationSlowComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AnimationSlowRoutingModule
  ]
})
export class AnimationSlowModule { }
