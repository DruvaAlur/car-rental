import { Component } from '@angular/core';
import { MainPageService } from '../main-page.service';

@Component({
  selector: 'app-billing-page',
  templateUrl: './billing-page.component.html',
  styleUrls: ['./billing-page.component.css']
})
export class BillingPageComponent {

  constructor(private mainPageService:MainPageService){}



}
