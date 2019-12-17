import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AnimationSlowComponent } from './animation-slow.component';
import { AnimationSlowRoutingModule } from './animation-slow-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    AnimationSlowComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AnimationSlowRoutingModule,
    SharedModule
  ]
})
export class AnimationSlowModule { }
