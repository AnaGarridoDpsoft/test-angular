import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'

import { HeroComponent } from 'src/app/heroes/hero/hero.component';
import { ListComponent } from 'src/app/heroes/list/list.component';

@NgModule({
  exports: [
    HeroComponent,
    ListComponent,
  ],
  declarations: [
    HeroComponent,
    ListComponent,
  ],
  imports: [
    CommonModule
  ]

})
export class HeroesModule { }
