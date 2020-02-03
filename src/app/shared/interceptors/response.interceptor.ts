import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

export class ResponseInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const cloned = req.clone();

    return next.handle(cloned).pipe(
      tap((response: HttpResponse<any>) => {
        if (response.status === 200) {
          console.log('status', response.status)
        }
      })
    )
  }
}