import { Component, Input } from "@angular/core";
import { Usuario } from "./usuario.model";
import { UsuarioService } from "./usuario.service";

@Component({
  selector: "app-usuario",
  template: ``
  // templateUrl: "./usuario.component.html",
  // styleUrls: ["./usuario.component.css"]
})
export class UsuarioComponent {
  @Input() usuarioVarClasse: Usuario = new Usuario("", "");
  constructor(private usuarioServiceObj: UsuarioService) {}
  addUsuario(usuario: Usuario) {}
}
