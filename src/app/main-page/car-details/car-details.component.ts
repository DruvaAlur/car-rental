import { Component } from '@angular/core';
import { MainPageService } from '../main-page.service';
import { CommonMethods } from '../commonMethods';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.css']
})
export class CarDetailsComponent {
  carDetails:Observable<any>=new Observable();
  data$: any;
  constructor(public mainPageServices:MainPageService,public commonMethods:CommonMethods){
    this.data$=mainPageServices.cardContent
    this.carDetails = mainPageServices.carDetail
  }
  ngOnInit(){
  }
}
