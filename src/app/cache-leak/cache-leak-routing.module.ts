import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CacheLeakComponent } from './cache-leak.component';

const routes: Routes = [{
  path: '',
  component: CacheLeakComponent
}];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class CacheLeakRoutingModule { }
