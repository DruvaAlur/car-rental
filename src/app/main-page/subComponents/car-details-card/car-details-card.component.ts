import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MainPageService } from '../../main-page.service';

@Component({
  selector: 'app-car-details-card',
  templateUrl: './car-details-card.component.html',
  styleUrls: ['./car-details-card.component.css']
})
export class CarDetailsCardComponent {
  @Input() data:any;
  src:any;
  constructor(private mainPageService:MainPageService){
    
  }
  ngOnInit(){
    console.log(this.data)
  }
}
