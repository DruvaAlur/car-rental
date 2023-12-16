import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageParentComponent } from './main-page-parent/main-page-parent.component';

const routes: Routes = [
  {path:'',component:MainPageParentComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainPageRoutingModule { }
