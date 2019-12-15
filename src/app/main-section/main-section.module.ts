import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainSectionComponent } from './main-section.component';
import { MainSectionRoutingModule } from './main-section-routing.module';

@NgModule({
  declarations: [
    MainSectionComponent
  ],
  imports: [
    MainSectionRoutingModule,
    CommonModule
  ]
})
export class MainSectionModule { }
