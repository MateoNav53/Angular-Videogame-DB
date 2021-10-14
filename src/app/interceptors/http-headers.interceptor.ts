import { HttpHandler, HttpInterceptor } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class HttpHeadersInterceptor implements HttpInterceptor {
    constructor() {
    }
    intercept(
        req: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        req = req.clone({
            setHeaders: {
                
            }
        })
    }
}