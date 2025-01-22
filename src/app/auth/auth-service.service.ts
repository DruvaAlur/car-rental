import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { baseUrl } from '../../../environment';

@Injectable({
  providedIn: 'root',
})
export class AuthServiceService {
  loginCompFlag: BehaviorSubject<boolean> = new BehaviorSubject(true);
  constructor(private http: HttpClient) {}

  signUp(data: any) {
    return this.http.post(`${baseUrl}auth/signUp`, data);
  }

  login(data: any) {
    return this.http.post(`${baseUrl}auth/login`, data);
  }
  authLogin(data: any) {
    return this.http.post(`${baseUrl}auth/authLogin`, data);
  }
}
