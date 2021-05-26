import { Injectable, Injector } from "@angular/core";
import {
    HttpEvent,
    HttpInterceptor,
    HttpResponse,
    HttpHandler,
    HttpRequest,
    HttpHeaders,
    HttpErrorResponse
} from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";
import { Router } from "@angular/router";
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { AuthService } from 'src/app/components/auth/services/auth.service';

@Injectable()
export class AppInterceptor implements HttpInterceptor {
    private headers: HttpHeaders;

    constructor(private readonly authService: AuthService, private readonly router: Router) { }

    intercept(
        req: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        if (req.url.startsWith("/assets")) {
            // serve assets directly
            return next.handle(req);
        }
        let token = this.authService.getToken();
        req = req.clone({
            setHeaders: { Authorization: `Bearer ${token}` }
        });
        console.log('IM HERER')
        return next.handle(req)
        .pipe(
            catchError((error: HttpErrorResponse) => {
                console.log(error);
                if (error.status == 401 || error.status == 403) {
                    this.authService.logout();
                    this.router.navigate(["/auth/login"]);
                }
                return throwError(error);
            }),
            map(event => {
              if (event instanceof HttpResponse) {
                  // event = event.clone({ body: resolveReferences(event.body) })
                  if(event.body && event.body.errors && event.body.errors.length && event.body.errors[0].message &&
                    (event.body.errors[0].message.statusCode === 401 || event.body.errors[0].message.statusCode === 403)) {
                      this.authService.logout();
                      this.router.navigate(["/auth/login"]);
                    }
              }
              return event;
            })
        );
    }
}
