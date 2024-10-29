import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators'

@Injectable()
export class ShortInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const TOKEN = "3a20d4ac59cd15cba9b5ba47a5ba1a345239f26f"
    
    request = request.clone({ setHeaders: {Authorization: 'Bearer '+ TOKEN}})
    return next.handle(request).pipe(catchError((error: HttpErrorResponse) => {
      console.log(error);
      return throwError(error)
    }));
  }
}
