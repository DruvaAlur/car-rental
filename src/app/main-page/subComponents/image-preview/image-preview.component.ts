import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-image-preview',
  templateUrl: './image-preview.component.html',
  styleUrls: ['./image-preview.component.css']
})
export class ImagePreviewComponent {
  @Input() data:any;
  previewImage:any=''
  constructor(){

  }
  ngOnInit(){
    this.previewImage=this.data.images[0]
  }
  changePreview(i:number){
    this.previewImage=this.data.images[i]
  }
}
