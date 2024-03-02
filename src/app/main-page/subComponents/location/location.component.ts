import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent {
  @Input() data:any;
  @Input() heading:any;
  constructor(){
  }
  ngOnInit(){
    console.log(this.data)
    console.log(this.heading)
  }
}
