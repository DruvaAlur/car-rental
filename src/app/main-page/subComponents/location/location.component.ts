import { Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MainPageService } from '../../main-page.service';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css'],
})
export class LocationComponent {
  @Input() data: any;
  @Input() heading: any;
  locationForm: FormGroup;
  cityList: any[] = [];
  constructor(private MainPageService: MainPageService) {
    this.locationForm = new FormGroup({
      location: new FormControl(''),
      date: new FormControl(''),
      time: new FormControl(''),
    });
  }
  getFormValue() {
    return this.locationForm.value;
  }
  ngOnInit() {
    this.MainPageService.getCitiesList();
    this.MainPageService.citiesList.subscribe((cities) => {
      console.log(cities);

      this.cityList = cities;
    });
  }
}
