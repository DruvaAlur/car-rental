import { Component } from '@angular/core';
import { MainPageService } from './main-page/main-page.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'car-rental';
  constructor(
    private mainPageService:MainPageService
  ){
  }
  ngOnInit(){
    if(sessionStorage.getItem('carId')){
      let carId:string=''
      carId=sessionStorage.getItem('carId')!
      this.mainPageService.getCarById(carId).subscribe((resp)=>{
        this.mainPageService.setCarDetails(resp)
      })
    }
  }
}
