import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { DomSanitizer } from '@angular/platform-browser';
import { baseUrl } from '../../../environment';

@Injectable({
  providedIn: 'root',
})
export class MainPageService {
  cardContents: BehaviorSubject<any> = new BehaviorSubject([]);
  carDetails: BehaviorSubject<any> = new BehaviorSubject('');
  searchedResult: BehaviorSubject<any> = new BehaviorSubject([]);
  selectedCarId: BehaviorSubject<any> = new BehaviorSubject('');
  dropOff: BehaviorSubject<any> = new BehaviorSubject({});
  pickUp: BehaviorSubject<any> = new BehaviorSubject({});
  citiesList: BehaviorSubject<any> = new BehaviorSubject([]);
  nominatimUrl: string = 'https://nominatim.openstreetmap.org/reverse';
  get carDetail() {
    return this.carDetails as Observable<any>;
  }

  setCarDetails(carDetails: any) {
    this.carDetails.next(carDetails);
  }

  get searchedResults() {
    return this.searchedResult as Observable<any>;
  }

  searchResults(res: any[]) {
    this.searchedResult.next(res);
  }

  get cardContent() {
    return this.cardContents as Observable<any>;
  }

  constructor(private http: HttpClient, private sanitizer: DomSanitizer) {}

  getAllCards() {
    this.http.get(`${baseUrl}cars/getAllCars`).subscribe(
      (res) => {
        this.cardContents.next(res);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  _arraybuffertobase64(buffer: any) {
    var binary = '';
    var bytes = new Uint8Array(buffer);
    var len = bytes.byteLength;
    for (var i = 0; i < len; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    return binary;
  }

  sanitize(url: string) {
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }

  getSearchSuggestions(value: string): Observable<any> {
    return this.http.get(`${baseUrl}cars/autoComplete?searchQuery=${value}`);
  }

  getSearchResults(value: string): Observable<any> {
    return this.http.get(`${baseUrl}cars/search?searchQuery=${value}`);
  }

  getCarById(id: string) {
    return this.http.get(`${baseUrl}cars/getCarById?searchQuery=${id}`);
  }

  redirectToPayment(id: string) {
    return this.http.post(`${baseUrl}cars/checkout`, { carid: id });
  }

  getCityAndState(latitude: number, longitude: number): Observable<any> {
    const url = `${this.nominatimUrl}?lat=${latitude}&lon=${longitude}&format=jsonv2`;
    return this.http.get(url);
  }

  getStoreLocation(request: any) {
    return this.http.post(`${baseUrl}cars/getStoreLocation`, request);
  }

  checkStatus() {
    return this.http.get(`${baseUrl}auth/checkStatus`, {
      withCredentials: true,
    });
  }

  getCitiesList() {
    console.log(this.citiesList.value);
    if (this.citiesList.value.length != 0) {
      return;
    }
    this.http.get(`${baseUrl}cars/getCityList`).subscribe((response) => {
      this.citiesList.next(response);
    });
  }
}
