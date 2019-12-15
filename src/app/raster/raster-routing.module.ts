import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RasterComponent } from './raster.component';

const routes: Routes = [{
  path: '',
  component: RasterComponent
}];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class RasterRoutingModule { }
