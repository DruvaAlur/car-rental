import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MainPageService } from '../../main-page.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-thank-you-card',
  templateUrl: './thank-you-card.component.html',
  styleUrls: ['./thank-you-card.component.css']
})
export class ThankYouCardComponent {
  @Input()carDetails:any 
  @Output() notify: EventEmitter<void> = new EventEmitter<void>();
  src:any
  carDetail:any
  dropOffForm: FormGroup;
  pickUpForm:FormGroup; 
 constructor(private MainPageService:MainPageService,private fb:FormBuilder){
  this.pickUpForm = this.fb.group({
    pickupLocation:this.fb.control('',Validators.required),
    pickupDate:this.fb.control('',Validators.required),
    pickupTime:this.fb.control('',Validators.required)
  })
  this.dropOffForm = this.fb.group({
    dropLocation:this.fb.control('',Validators.required),
    dropDate:this.fb.control('',Validators.required),
    dropTime:this.fb.control('',Validators.required)
  })
 }

 ngOnInit(){
  console.log(this.carDetails)
  this.carDetail=this.carDetails
  if(this.carDetail.images){
    this.src = this.carDetail.images[0]
  }
 }

 notifyMapsComponent(){
  this.notify.emit()
 }
 
}
