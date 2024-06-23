import { Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent {
  @Input() data:any;
  @Input() heading:any;
  locationForm:FormGroup;
  constructor(){
    this.locationForm=new FormGroup({
      location:new FormControl(''),
      date:new FormControl(''),
      time:new FormControl('')
    })
  }
  getFormValue(){
    return this.locationForm.value
  }
  ngOnInit(){

  }
}
