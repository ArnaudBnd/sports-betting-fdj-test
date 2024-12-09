import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpErrorResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable()
export class ErrorHandlerInterceptor implements HttpInterceptor{
  constructor(private router: Router) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 404) {
          this.router.navigate(['/error'], {
            state: { message: "La ressource demandée n'a pas été trouvée." },
          });
        } else if (error.status === 400) {
          this.router.navigate(['/error'], {
            state: { message: 'La requête envoyée est invalide.' },
          });
        } else {
          this.router.navigate(['/error'], {
            state: { message: 'Une erreur serveur est survenue.' },
          });
        }
        return throwError(() => error);
      })
    );
  }
}
