import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MainPageService } from '../../main-page.service';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css'],
})
export class LocationComponent {
  @Input() data: any;
  @Input() heading: any;
  @Input() formData: any;
  locationForm: FormGroup = new FormGroup({
    location: new FormControl('', [Validators.required]),
    date: new FormControl('', [Validators.required]),
    time: new FormControl('', [Validators.required]),
  });
  cityList: any[] = [];
  constructor(public MainPageService: MainPageService) {}
  getFormValid() {
    return this.locationForm.valid;
  }
  getFormValue() {
    return this.locationForm.value;
  }
  ngOnInit() {
    console.log(this.formData);

    this.locationForm.patchValue(this.formData);
    this.MainPageService.getCitiesList();
    this.MainPageService.citiesList.subscribe((cities) => {
      console.log(cities);

      this.cityList = cities;
    });
  }
}
