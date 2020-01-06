import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CacheLeakComponent } from './cache-leak.component';
import { CacheLeakRoutingModule } from './cache-leak-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { CacheLeakService } from './cache-leak.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CacheLeakComponent
  ],
  imports: [
    CommonModule,
    CacheLeakRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    CacheLeakService
  ]
})
export class CacheLeakModule { }
