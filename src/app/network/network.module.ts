import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NetworkComponent } from './network.component';
import { NetworkRoutingModule } from './network-routing.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [NetworkComponent],
  imports: [
    CommonModule,
    NetworkRoutingModule,
    HttpClientModule
  ]
})
export class NetworkModule { }
