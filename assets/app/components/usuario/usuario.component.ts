import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Usuario } from "./usuario.model";
import { UsuarioService } from "./usuario.service";
@Component({
  selector: "app-usuario",
  template:``,
})
export class UsuarioComponent {
   @Input() usuarioVarClasse: Usuario = new Usuario("", "");
   constructor(private UsuarioServiceObj: UsuarioService) {}
  // onEditService(){
  //   this.UsuarioServiceObj.editUsuario(this.usuarioVarClasse);
  // }
  // onDeleteService(){
  //   debugger;
  //   this.UsuarioServiceObj.deleteUsuario(this.usuarioVarClasse).subscribe(
  //     dadosSucesso => console.log(dadosSucesso),
  //     dadosErro => console.log(dadosErro)
  //   )
  // }
}
