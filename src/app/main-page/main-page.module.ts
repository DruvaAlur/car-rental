import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainPageRoutingModule } from './main-page-routing.module';
import { MainPageParentComponent } from './main-page-parent/main-page-parent.component';
import { CarcardsComponent } from './subComponents/carcards/carcards.component';
import { LocationComponent } from './subComponents/location/location.component';
import { ReverseComponent } from './subComponents/reverse/reverse.component';
import { HeaderComponent } from './subComponents/header/header.component';


@NgModule({
  declarations: [
    MainPageParentComponent,
    CarcardsComponent,
    LocationComponent,
    ReverseComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    MainPageRoutingModule
  ]
})
export class MainPageModule { }
