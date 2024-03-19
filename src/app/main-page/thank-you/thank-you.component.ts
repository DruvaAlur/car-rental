import { Component } from '@angular/core';
import { MainPageService } from '../main-page.service';

@Component({
  selector: 'app-thank-you',
  templateUrl: './thank-you.component.html',
  styleUrls: ['./thank-you.component.css']
})
export class ThankYouComponent {
  constructor(public MainPageService:MainPageService){}
  ngOnInit(){
    let carId;
  if(this.MainPageService.selectedCarId.value){
    carId=this.MainPageService.selectedCarId.value
  }else{
    carId=sessionStorage.getItem('carId')
  }
  this.MainPageService.getCarById(carId).subscribe((response)=>{
    this.MainPageService.carDetails.next(response)
  })
  }
}
