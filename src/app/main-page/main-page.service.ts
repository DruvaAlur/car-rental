import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import {DomSanitizer} from '@angular/platform-browser';
import {baseUrl} from '../../../environment'

@Injectable({
  providedIn: 'root'
})
export class MainPageService {
  cardContents:BehaviorSubject<any>=new BehaviorSubject([]);
  cards:Observable<any>=this.cardContents.asObservable()
  carDetails:BehaviorSubject<any>=new BehaviorSubject('')
  searchedResult:BehaviorSubject<any> = new BehaviorSubject([])

  get carDetail(){
    return this.carDetails as Observable<any>
  }

  setCarDetails(carDetails:any){
    this.carDetails.next(carDetails)
  }

  get searchedResults(){
    return this.searchedResult as Observable<any>
  }

  searchResults(res:any[]){
    this.searchedResult.next(res);
  }

  get cardContent(){
    return this.cards
  }

  constructor(private http: HttpClient,private sanitizer:DomSanitizer) { }

  getAllCards() {
    this.http.get(`${baseUrl}cars/getAllCars`).subscribe((res)=>{
      this.cardContents.next(res);
    },(err)=>{
      console.log(err)
    })
  }

  _arraybuffertobase64( buffer:any ) {
    var binary = '';
    var bytes = new Uint8Array( buffer );
    var len = bytes.byteLength;
    for (var i = 0; i < len; i++) {
       binary += String.fromCharCode( bytes[ i ] );
    }
    return binary;
  }

  sanitize( url:string ) {
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }

  getSearchSuggestions(value:string): Observable<any>{
    return this.http.get(`${baseUrl}cars/autoComplete?searchQuery=${value}`)
  }

  getSearchResults(value:string): Observable<any>{
    return this.http.get(`${baseUrl}cars/search?searchQuery=${value}`)
  }

  getCarById(id:string){
    return this.http.get(`${baseUrl}cars/getCarById?searchQuery=${id}`)
  }
}
