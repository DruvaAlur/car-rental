import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MainPageService } from '../../main-page.service';

@Component({
  selector: 'app-carcards',
  templateUrl: './carcards.component.html',
  styleUrls: ['./carcards.component.css']
})
export class CarcardsComponent {
  @Input() data:any;
  @Output() rentNow = new EventEmitter<string>()
  src:any;
  constructor(private mainPageService:MainPageService){
    
  }
  ngOnInit(){
    if(this.data.image.data.data){
      let blob = this.data.image.data.data;
      let source = this.mainPageService.sanitize('data:image/png;base64, ' + this.mainPageService._arraybuffertobase64(blob))
      this.src = source
    }
    else{
      this.src='data:image/png;base64, '+this.data.image.data
    }
  }

  rentCarNow(event:string){
    this.rentNow.emit(event)
  }
}
