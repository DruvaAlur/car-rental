import { Component } from '@angular/core';
import { MainPageService } from '../main-page.service';
import { Observable } from 'rxjs';
import { CommonMethods } from '../commonMethods';

@Component({
  selector: 'app-searched-result',
  templateUrl: './searched-result.component.html',
  styleUrls: ['./searched-result.component.css']
})
export class SearchedResultComponent {

  constructor(public MainPageServices:MainPageService,public commonMethods:CommonMethods){
  }

}
