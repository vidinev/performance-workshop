import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadComponent } from './load.component';
import { LoadRoutingModule } from './load-routing.module';

@NgModule({
  declarations: [
    LoadComponent
  ],
  imports: [
    LoadRoutingModule,
    CommonModule
  ]
})
export class LoadModule { }
