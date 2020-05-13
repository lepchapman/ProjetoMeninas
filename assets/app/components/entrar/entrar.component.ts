import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators, NgForm } from "@angular/forms";
import { UsuarioService } from "../usuario/usuario.service";
import { Router } from "@angular/router";
import { Usuario } from "../usuario/usuario.model";

@Component({
  selector: "app-entrar",
  templateUrl: "./entrar.component.html",
  styleUrls: ["./entrar.component.css"],
  // providers:[UsuarioService]
})
export class EntrarComponent implements OnInit {
  myFormlogin: FormGroup;
 // error: any;
  constructor(private usuarioService: UsuarioService, private router: Router) {}
  ngOnInit() {
    this.myFormlogin = new FormGroup({
      emailTS: new FormControl(null, [
        Validators.required,
        Validators.pattern("[a-zA-Z0-9-_.]+@[a-zA-Z0-9-_.]+"),
      ]),
      passwordTS: new FormControl(null, Validators.required),
    });
  }

  onSubmit(form: NgForm) {
    const usuarioAux = new Usuario(form.value.emailTS, form.value.passwordTS);
    console.log("usuarioAux", usuarioAux);
    debugger;
    this.usuarioService.entrar(usuarioAux).subscribe(
      (dadosSucesso) => {
        console.log("subscribe SUCESS:", dadosSucesso);
        //debugger;
        this.router.navigate(["home"]);
      },
      (dadosErro) => {
     //   this.error = dadosErro;
        //debugger;
        console.log("subscribe ERRO:", dadosErro);
        this.router.navigate(["entrar"]);
      }
    );
    form.resetForm();
   // console.log("this.error:",this.error);
  }
  onSave(textCosole: string) {
    const usuarioAux = new Usuario(textCosole, "Teste");
    this.usuarioService.cadastrarUsuario(usuarioAux);
    console.log(textCosole);
  }
}

// entrar(email:string, password:string){
//   this.usuarioService.entrar(email,password).subscribe(
//     sucess=>this.router.navigate(['home']),
//     error=>this.error = error
//   )
// }
