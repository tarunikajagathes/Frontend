import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { NgxSpinnerService } from 'ngx-spinner';
import {catchError, tap} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class MyInterceptorService implements HttpInterceptor {

  constructor( private spinner: NgxSpinnerService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    var token = sessionStorage.getItem('currentUser');
    this.spinner.show();
    return next.handle(req.clone({ headers: req.headers.set('Authorization', `${token}`) })).pipe(
      tap(evt=>{
        if(evt instanceof HttpResponse){
          this.spinner.hide();
        }
      }),
      catchError((error:any)=>{
        if(error.statusText!='Unknown Error'){
          this.spinner.hide();
        }
        return throwError(error);
      })
    );
  }
}
