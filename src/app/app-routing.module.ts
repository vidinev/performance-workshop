import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const mainRoutes: Routes = [{
  path: '',
  loadChildren: () => import('./load/load.module').then(m => m.LoadModule),
  data: {
    title: 'Initial page load'
  }
}, {
  path: 'main',
  loadChildren: () => import('./main-section/main-section.module').then(m => m.MainSectionModule),
  data: {
    title: 'Main section'
  }
}, {
  path: 'raster',
  loadChildren: () => import('./raster/raster.module').then(m => m.RasterModule),
  data: {
    title: 'Raster'
  }
}, {
  path: 'animation-slow',
  loadChildren: () => import('./animation/animation-slow/animation-slow.module').then(m => m.AnimationSlowModule),
  data: {
    title: 'Animation slow'
  }
}, {
  path: 'animation-fast',
  loadChildren: () => import('./animation/animation-fast/animation-fast.module').then(m => m.AnimationFastModule),
  data: {
    title: 'Animation fast'
  }
}, {
  path: 'network',
  loadChildren: () => import('./network/network.module').then(m => m.NetworkModule),
  data: {
    title: 'Network'
  }
}];

@NgModule({
  imports: [
    RouterModule.forRoot(mainRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
