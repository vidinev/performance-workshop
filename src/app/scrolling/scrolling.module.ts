import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollingComponent } from './scrolling.component';
import { ScrollingRoutingModule } from './scrolling-routing.module';

@NgModule({
  declarations: [ScrollingComponent],
  imports: [
    CommonModule,
    ScrollingRoutingModule
  ]
})
export class ScrollingModule { }
