import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AnimationFastComponent } from './animation-fast.component';
import { AnimationFastRoutingModule } from './animation-fast-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [AnimationFastComponent],
  imports: [
    AnimationFastRoutingModule,
    CommonModule,
    FormsModule,
    SharedModule
  ]
})
export class AnimationFastModule { }
