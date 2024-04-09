import { Component } from '@angular/core';
import { MainPageService } from './main-page/main-page.service';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'car-rental';
  hideBar:boolean=false;
  constructor(
    private mainPageService:MainPageService,
    private router:Router
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
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const currentRoute = this.router.routerState.snapshot.url;
        if(currentRoute=='/login'){
          this.hideBar=true
        }else{
          this.hideBar=false
        }
      }
    })
  }
  getRoute(){
    this.router.getCurrentNavigation
  }
}
