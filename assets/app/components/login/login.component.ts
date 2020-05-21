import { Validators, FormGroup, FormBuilder } from "@angular/forms";
import { UsuarioService } from "../usuario/usuario.service";
import { Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";
@Component({
  selector: 'app-registro',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css'],
})

export class LoginComponent implements OnInit {
  formLogin: FormGroup;
  constructor(
    private fb: FormBuilder,
    private autenticacao: UsuarioService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.initFormulario();
  }
  initFormulario() {
    this.formLogin = this.fb.group({
      email: this.fb.control("", [Validators.required]),
      senha: this.fb.control("", [Validators.required]),
    });
  }
  submit() {
    this.autenticacao
      .login(this.formLogin.value.email, this.formLogin.value.senha)
      .subscribe((res) => {
        // console.log(res);
        localStorage.setItem("token", res.token);
        this.router.navigateByUrl("/");
      });
    console.log(this.formLogin.value);
  }
}

