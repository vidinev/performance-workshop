import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{
  path: '',
  loadChildren: () => import('./load/load.module').then(m => m.LoadModule)
}, {
  path: 'main',
  loadChildren: () => import('./main-section/main-section.module').then(m => m.MainSectionModule)
}];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
