import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageParentComponent } from './main-page-parent/main-page-parent.component';
import { SearchedResultComponent } from './searched-result/searched-result.component';
import { CarDetailsComponent } from './car-details/car-details.component';

const routes: Routes = [
  {path:'',component:MainPageParentComponent},
  {path:'Search',component:SearchedResultComponent},
  {path:'CarDetails',component:CarDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainPageRoutingModule { }
