import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Usuario } from "./usuario.model";
import { UsuarioService } from "./usuario.service";
@Component({
  selector: "app-usuario",
  template:``,
})
export class UsuarioComponent {
  @Input() usuarioVarClasse: Usuario = new Usuario("", "");
  constructor(private UserServiceObj: UsuarioService) {}
}
