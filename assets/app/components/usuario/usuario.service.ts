import { UsuarioI } from "./usuario.interface";
import { Injectable, EventEmitter } from "@angular/core";
import { Http, Response, Headers } from "@angular/http";
import "rxjs/Rx";
import { Observable } from "rxjs";
import { Router } from "@angular/router";
import { environment } from "../environment/environment";
import { from } from "rxjs/observable/from";
import { HttpClient } from "@angular/common/http";
const api = environment.api;
@Injectable()
export class UsuarioService {
  constructor(private http: HttpClient, private router: Router) {}
  token = localStorage.getItem("token");
  login(email: string, senha: string): Observable<any> {
    return this.http.post(`${api}/usuarios/login`, {
      email: email,
      senha: senha,
    });
  }
  cadastrar(usuario: UsuarioI): Observable<any> {
    return this.http.post(`${api}/usuarios`, usuario);
  }
  isLogged(): boolean {
    console.log(this.token);
    return this.token ? true : false;
  }
  estaLogado(): Observable<any> {
    return this.http.get(`${api}/usuarios/info`);
  }
  logout() {
    localStorage.removeItem("token");
    this.router.navigateByUrl("/usuario/login");
  }
}
