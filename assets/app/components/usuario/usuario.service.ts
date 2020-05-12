import { Http, Response, Headers } from "@angular/http";
import { Injectable, EventEmitter } from "@angular/core";
import { Usuario } from "./usuario.model";
import "rxjs/Rx";
import { Observable } from "rxjs";

//Adicionando os imports para o jwt
import { HttpClient, HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { CanActivate, Router } from '@angular/router';
import { tap, shareReplay } from 'rxjs/operators';
import * as jwtDecode from 'jwt-decode';
import * as moment from 'moment';

@Injectable()
export class UsuarioService {
  private UsuarioSService: Usuario[] = [];
  public apiRoot = 'http://localhost:3000/usuario';
  constructor(private http: Http) {}

  cadastrarUsuario(usuario: Usuario) {
    const bodyReq = JSON.stringify(usuario);
    const myHeaders = new Headers({ "Content-Type": "application/json" });
    // return this.http.post(
    //   this.apiRoot.concat('signup/'),
    //   { username, email, password1, password2 }
    // ).pipe(
    //   tap(response => this.setSession(response)),
    //   shareReplay(),
    // );
    return this.http
      .post(this.apiRoot, bodyReq, {
        headers: myHeaders,
      })
      .map((responseRecebida: Response) => {
        var aux = responseRecebida.json();
        console.log("responseRecebida:", aux);
        const newObjUsuario = new Usuario(
          aux.objUserSave.email,
          aux.objUserSave.password,
          aux.objUserSave.firstName,
          aux.objUserSave.lastName
        );
        this.UsuarioSService.push(newObjUsuario);
        return newObjUsuario;
      })
      .catch((errorRecebido: Response) =>
        Observable.throw(errorRecebido.json())
      );
  }

  //-------------------------------- Inicio jwt------------------------------------------//
  private setSession(authResult) {
    const token = authResult.token;
    const payload = <JWTPayload>jwtDecode(token);
    const expiresAt = moment.unix(payload.exp);

    localStorage.setItem("token", authResult.token);
    localStorage.setItem("expires_at", JSON.stringify(expiresAt.valueOf()));
  }

  get token(): string {
    return localStorage.getItem("token");
  }

  entrar(email: string, password: string) {
    return this.http
      .post(this.apiRoot.concat("/"), { email, password })
      .pipe(
        tap((response) => this.setSession(response)),
        shareReplay()
      );
  }

  logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("expires_at");
  }

  refreshToken() {
    if (
      moment().isBetween(
        this.getExpiration().subtract(1, "days"),
        this.getExpiration()
      )
    ) {
      return this.http
        .post(this.apiRoot.concat("refresh-token/"), { token: this.token })
        .pipe(
          tap((response) => this.setSession(response)),
          shareReplay()
        )
        .subscribe();
    }
  }

  getExpiration() {
    const expiration = localStorage.getItem("expires_at");
    const expiresAt = JSON.parse(expiration);

    return moment(expiresAt);
  }

  isLoggedIn() {
    return moment().isBefore(this.getExpiration());
  }

  isLoggedOut() {
    return !this.isLoggedIn();
  }
}

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const token = localStorage.getItem("token");

    if (token) {
      const cloned = req.clone({
        headers: req.headers.set("Authorization", "JWT ".concat(token)),
      });

      return next.handle(cloned);
    } else {
      return next.handle(req);
    }
  }
}

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private authService: UsuarioService, private router: Router) {}

  canActivate() {
    if (this.authService.isLoggedIn()) {
      this.authService.refreshToken();

      return true;
    } else {
      this.authService.logout();
      this.router.navigate(["home"]);

      return false;
    }
  }
}

interface JWTPayload {
  _id: number;
  firstName: string;
  lastName: string;
  email: string;
  exp: number;
}
//-------------------------------- Fim jwt------------------------------------------//
