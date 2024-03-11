import { Component, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MainPageService } from '../../main-page.service';

@Component({
  selector: 'app-billing-form',
  templateUrl: './billing-form.component.html',
  styleUrls: ['./billing-form.component.css']
})
export class BillingFormComponent {
 billingForm: FormGroup;
 dropOffForm: FormGroup;
 pickUpForm:FormGroup;
 constructor(private fb:FormBuilder,private mainPageService:MainPageService){
  this.billingForm = this.fb.group({
    name:this.fb.control('',Validators.required),
    phoneNumber:this.fb.control('',Validators.required),
    address:this.fb.control('',Validators.required),
    town:this.fb.control('',Validators.required)
  })
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
 ngOnInit(){}

 redirectToPayment(){
  console.log(this.billingForm)
  console.log(this.pickUpForm)
  console.log(this.dropOffForm)
  if(!this.dropOffForm.valid && !this.billingForm.valid && !this.pickUpForm.valid){
    return
  }
  this.mainPageService.redirectToPayment(this.mainPageService.selectedCarId.value).subscribe((resp:any)=>{
    console.log(resp)
    window.open(resp.redirectionURL)
  })
}
}
