import { Component, ViewChild } from '@angular/core';
import { MainPageService } from '../main-page.service';
import { CommonMethods } from '../commonMethods';
import { Observable } from 'rxjs';
import { LocationComponent } from '../subComponents/location/location.component';

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.css']
})
export class CarDetailsComponent {
  parentData:any={}
  carDetails:Observable<any>=new Observable();
  data$: any;
  car:any;
  @ViewChild('pickUp') pickUp!: LocationComponent;
  @ViewChild('dropOff') dropOff!: LocationComponent;
  constructor(public mainPageServices:MainPageService,public commonMethods:CommonMethods){
    this.data$=mainPageServices.cardContent
    this.carDetails = mainPageServices.carDetail
  }
  ngOnInit(){
    this.carDetails.subscribe((value)=>{
      this.car=value
    })
  }
   rentNow(){
    this.commonMethods.rentNowForBilling(this.car._id,this.pickUp.getFormValue(),this.dropOff.getFormValue())
  }
}
