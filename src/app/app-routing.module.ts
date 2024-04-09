import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'login',loadChildren:()=>import('./auth/auth.module').then(m => m.AuthModule) },
  {path:'dashboard',loadChildren:()=>import('./main-page/main-page.module').then(m => m.MainPageModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
