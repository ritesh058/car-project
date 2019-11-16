import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()

export class AuthInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler) {
        if (localStorage.getItem("token") && localStorage.getItem("user_id")) {
            const authReq = req.clone({
                headers: req.headers.set("Authorization", `Bearer ${localStorage.getItem("token")}`).set("object_id", localStorage.getItem("user_id"))

            });
            return next.handle(authReq)
        }
        else return next.handle(req)

    }

}