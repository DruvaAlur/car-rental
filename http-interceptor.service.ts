import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HttpInterceptorService implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Clone the request and set withCredentials to true
    const modifiedReq = req.clone({ withCredentials: true });
    // Pass the cloned request instead of the original request
    return next.handle(modifiedReq);
  }
}
