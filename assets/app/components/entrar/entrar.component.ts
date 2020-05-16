import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators, NgForm } from "@angular/forms";
import { UsuarioService } from "../usuario/usuario.service";
import { Router } from "@angular/router";
import { Usuario } from "../usuario/usuario.model";

@Component({
  selector: "app-entrar",
  templateUrl: "./entrar.component.html",
  styleUrls: ["./entrar.component.css"],
})
export class EntrarComponent implements OnInit {
  myFormlogin: FormGroup;
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
    this.usuarioService.entrar(usuarioAux).subscribe(
      (dadosSucesso) => {
       localStorage.setItem("usuario",JSON.stringify({ nome:dadosSucesso.firstName,sobrenome:dadosSucesso.lastName,email:dadosSucesso.email }));
       this.router.navigate(["home"]);
      },
      (dadosErro) => {
        window.localStorage.removeItem("usuario");
        this.router.navigate(["usuario/entrar"]);
      }
    );
    form.resetForm();
  }
  onSave(textCosole: string) {
    const usuarioAux = new Usuario(textCosole, "Teste");
    this.usuarioService.cadastrarUsuario(usuarioAux);
    console.log(textCosole);
  }
}
