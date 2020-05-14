import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Usuario } from "./usuario.model";
import { UsuarioService } from "./usuario.service";
@Component({
  selector: "app-usuario",
  template:`  <div class="row">
  <div class="col-12 ">
      <div class="card text-center">
          <div class="card-header">
              <!-- [ngStyle]="{'background-color': style1 ? 'red' : (style2 ? 'blue' : null) }"  -->
              <a [routerLink]="['entrar']" id="entrar" class="link-nav"><i class="fa fa-user"></i>Entrar</a>
              <a [routerLink]="['cadastrar']" id="cadastrar" class="link-nav"><i class="fa fa-user-plus"></i>Cadastro</a>
          </div>
          <div class="card-body">
              <!--Aqui fica o compoments Cadastro/Login
              <router-outlet></router-outlet>
              -->
              <router-outlet></router-outlet>
          </div>

              <!-- 
                  --Aqui são as mensagens de erro ou sucesso--
                  <div class="message-response">
                      <div class="alert alert-error" role="alert">
                          Message ERROR or SUCESS
                      </div>
                  </div>
              -->

      </div>
  </div>
</div>`,
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
