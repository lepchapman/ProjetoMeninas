import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators, NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { Usuario } from "../usuario/usuario.model";
import { UsuarioService } from "../usuario/usuario.service";

@Component({
  selector: "app-cadastrar",
  templateUrl: "./cadastrar.component.html",
  styleUrls: ["./cadastrar.component.css"],
})
export class CadastrarComponent implements OnInit {
  usuarioLoad: Usuario;
  myForm: FormGroup;
  error: any;
  constructor(private usuarioService: UsuarioService, private router: Router) {}
  ngOnInit() {
    this.myForm = new FormGroup({
      firstNameTS: new FormControl(null, Validators.required),
      lastNameTS: new FormControl(null, Validators.required),
      emailTS: new FormControl(null, [
        Validators.required,
        Validators.pattern("[a-zA-Z0-9-_.]+@[a-zA-Z0-9-_.]+"),
      ]),
      passwordTS: new FormControl(null, Validators.required),
    });
  }
  onSubmit(form: NgForm) {
    const usuarioAux = new Usuario(
      form.value.emailTS,
      form.value.passwordTS,
      form.value.firstNameTS,
      form.value.lastNameTS
    );
    debugger;
    this.usuarioService.cadastrarUsuario(usuarioAux).subscribe(
      (dadosSucesso) => {
        console.log(dadosSucesso);
         this.router.navigate(["entrar"]);
      },
      (dadosErro) => {
        this.error = dadosErro;
        console.log(dadosErro);
        this.router.navigate(["cadastrar"]);
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
