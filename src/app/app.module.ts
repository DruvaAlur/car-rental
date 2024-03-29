import { NgModule, APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { MainPageModule } from './main-page/main-page.module';
import {  HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './main-page/subComponents/header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MainPageService } from './main-page/main-page.service';
export function initializeApp(MainPageService: MainPageService) {
  if(sessionStorage.getItem('carId')){
    return () => MainPageService.getCarById(sessionStorage.getItem('carId')!).subscribe((res)=>{
      console.log('yayyyyyyyyy ................. its working')
      MainPageService.setCarDetails(res)
    })
  }else{
    return () => {};
  }
}
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    MainPageModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatAutocompleteModule,
    
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initializeApp,
      multi: true,
      deps: [MainPageService]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
