import { Http, Response, Headers } from "@angular/http";
import { Injectable, EventEmitter } from "@angular/core";
import { Usuario } from "./usuario.model";
import "rxjs/Rx";
import { Observable } from "rxjs";

@Injectable()
export class UsuarioService {
  private UsuarioSService: Usuario[] = [];
  public estaAutenticado:boolean = false;
  public apiRoot = "http://localhost:3000/usuario";
  constructor(private http: Http) {}

  cadastrarUsuario(usuario: Usuario) {
    const bodyReq = JSON.stringify(usuario);
    const myHeaders = new Headers({ "Content-Type": "application/json" });
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

  entrar(usuario: Usuario) {
    const bodyReq = JSON.stringify(usuario);
    const myHeaders = new Headers({ "Content-Type": "application/json" });
  
    return this.http
      .post(this.apiRoot + "/entrar", bodyReq, {
        headers: myHeaders,
      })
      .map((responseRecebida: Response) => {
        var aux = responseRecebida.json();
        console.log("responseRecebida:", aux);
        const newObjUsuario = new Usuario(
          aux.objUserSave.email,
          aux.objUserSave.password
        );
        console.log("objUserSave:", newObjUsuario);
        this.UsuarioSService.push(newObjUsuario);
        this.estaAutenticado = true;
        return newObjUsuario;
      })
      .catch((myError: Response) =>
        Observable.throw(myError.json())
      );
  }
}
