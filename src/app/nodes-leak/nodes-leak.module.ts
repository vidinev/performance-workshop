import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NodesLeakComponent } from './nodes-leak.component';
import { NodesLeakRoutingModule } from './nodes-leak-routing.module';

@NgModule({
  declarations: [
    NodesLeakComponent
  ],
  imports: [
    CommonModule,
    NodesLeakRoutingModule
  ]
})
export class NodesLeakModule { }
