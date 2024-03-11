import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageParentComponent } from './main-page-parent/main-page-parent.component';
import { SearchedResultComponent } from './searched-result/searched-result.component';
import { CarDetailsComponent } from './car-details/car-details.component';
import { BillingPageComponent } from './billing-page/billing-page.component';
import { ThankYouComponent } from './thank-you/thank-you.component';

const routes: Routes = [
  {path:'',component:MainPageParentComponent},
  {path:'Search',component:SearchedResultComponent},
  {path:'CarDetails',component:CarDetailsComponent},
  {path:'billingInfo',component:BillingPageComponent},
  {path:'thankYou',component:ThankYouComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainPageRoutingModule { }
