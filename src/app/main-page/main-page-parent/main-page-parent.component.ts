import { Component } from '@angular/core';
import { MainPageService } from '../main-page.service';
import { Observable } from 'rxjs';
import { CommonMethods } from '../commonMethods';

@Component({
  selector: 'app-main-page-parent',
  templateUrl: './main-page-parent.component.html',
  styleUrls: ['./main-page-parent.component.css']
})
export class MainPageParentComponent {
  parentData:any={}
  data$:Observable<any>=new Observable()
  constructor(public mainPageService:MainPageService,
    public commonMethods:CommonMethods,
    private a:MainPageService
    ){
    mainPageService.getAllCards()
    this.data$=a.cardContent
    a.cardContent.subscribe((res)=>{
      console.log(res);
    })
  }
}
