// import { Http, Response, Headers } from "@angular/http";
import { Injectable, EventEmitter } from "@angular/core";
// import { Usuario } from "./usuario.model";
// import "rxjs/Rx";
// import { Observable } from "rxjs";

@Injectable()
export class UsuarioService {
  // private UserSService: Usuario[] = [];
  // constructor(private http: Http) {}

  // addUser(usuario: Usuario) {
  //   console.log(this.UserSService);
  //   const bodyReq = JSON.stringify(usuario);
  //   const myHeaders = new Headers({ "Content-Type": "application/json" });
  //   return this.http
  //     .post("http://localhost:3000/usuario", bodyReq, {
  //       headers: myHeaders,
  //     })
  //     .map((responseRecebida: Response) => {
  //       var aux = responseRecebida.json();
  //       console.log("responseRecebidaUserAdd:",aux);
  //       const newObjUser = new Usuario(aux.objUserSave.email,aux.objUserSave.password,aux.objUserSave.firstName,aux.objUserSave.lastName);
  //       this.UserSService.push(newObjUser);
  //       return newObjUser;
  //     })
  //     .catch((errorRecebido: Response) =>
  //       Observable.throw(errorRecebido.json())
  //     );
  // }
}
