import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import {DomSanitizer} from '@angular/platform-browser';
import {baseUrl} from '../../../environment'
import { MainPageService } from './main-page.service';
import { Router } from '@angular/router';
@Injectable({
    providedIn: 'root'
})

export class CommonMethods {
    constructor(private MainPageService:MainPageService,private router: Router){}
    rentNow(event:string){
        this.MainPageService.getCarById(event).subscribe((res:any)=>{
          this.MainPageService.setCarDetails(res);
          this.router.navigate(['/CarDetails'])
        })
    }  
    rentNowForBilling(event:string){
      this.router.navigate(['/billingInfo'])
    }
}