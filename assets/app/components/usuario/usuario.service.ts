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
  constructor(private http: Http) {}

  addUsuario(usuario: Usuario) {
    const bodyReq = JSON.stringify(usuario);
    const myHeaders = new Headers({ "Content-Type": "application/json" });
    return this.http
      .post("http://localhost:3000/usuario", bodyReq, {
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
}
