import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AnimationSetupInterfaceComponent } from './animation-setup-interface/animation-setup-interface.component';
import { AnimatedItemComponent } from './animated-item/animated-item.component';

const declarations = [
  AnimationSetupInterfaceComponent,
  AnimatedItemComponent
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations,
  exports: [
    ...declarations
  ]
})
export class SharedModule { }
