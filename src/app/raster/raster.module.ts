import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RasterComponent } from './raster.component';
import { RasterRoutingModule } from './raster-routing.module';

@NgModule({
  declarations: [RasterComponent],
  imports: [
    CommonModule,
    RasterRoutingModule
  ]
})
export class RasterModule { }
