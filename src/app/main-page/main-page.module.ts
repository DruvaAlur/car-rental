import { NgModule } from '@angular/core';

import { MainPageRoutingModule } from './main-page-routing.module';
import { MainPageParentComponent } from './main-page-parent/main-page-parent.component';
import { CarcardsComponent } from './subComponents/carcards/carcards.component';
import { LocationComponent } from './subComponents/location/location.component';
import { ReverseComponent } from './subComponents/reverse/reverse.component';
import { HeaderComponent } from './subComponents/header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { SearchedResultComponent } from './searched-result/searched-result.component';
import { CarDetailsComponent } from './car-details/car-details.component';
import { ImagePreviewComponent } from './subComponents/image-preview/image-preview.component';
import { CarDetailsCardComponent } from './subComponents/car-details-card/car-details-card.component';
import { BillingPageComponent } from './billing-page/billing-page.component';
import { BillingFormComponent } from './subComponents/billing-form/billing-form.component';
import { BillingSummaryComponent } from './subComponents/billing-summary/billing-summary.component';
import { MapComponentComponent } from './subComponents/map-component/map-component.component';
import { ThankYouComponent } from './thank-you/thank-you.component';
import { ThankYouCardComponent } from './subComponents/thank-you-card/thank-you-card.component';

@NgModule({
  declarations: [
    MainPageParentComponent,
    CarcardsComponent,
    LocationComponent,
    ReverseComponent,
    SearchedResultComponent,
    CarDetailsComponent,
    ImagePreviewComponent,
    CarDetailsCardComponent,
    BillingPageComponent,
    BillingFormComponent,
    BillingSummaryComponent,
    MapComponentComponent,
    ThankYouComponent,
    ThankYouCardComponent
  ],
  imports: [
    MainPageRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    BrowserAnimationsModule,
    MatAutocompleteModule,
    // HttpClient
  ]
})
export class MainPageModule { }
