import { Component } from '@angular/core';
import { MainPageService } from '../main-page.service';

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.css']
})
export class CarDetailsComponent {
  carDetails:any;
  constructor(private mainPageServices:MainPageService){}
  ngOnInit(){
    this.mainPageServices.carDetail.subscribe((res:any)=>{
      this.carDetails=res;
    })
  }
}
