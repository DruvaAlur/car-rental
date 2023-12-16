import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainPageRoutingModule } from './main-page-routing.module';
import { MainPageParentComponent } from './main-page-parent/main-page-parent.component';
import { CarcardsComponent } from './subComponents/carcards/carcards.component';


@NgModule({
  declarations: [
    MainPageParentComponent,
    CarcardsComponent
  ],
  imports: [
    CommonModule,
    MainPageRoutingModule
  ]
})
export class MainPageModule { }
