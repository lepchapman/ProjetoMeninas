import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { UsuarioService } from '../usuario/usuario.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css'],
})
export class CadastrarComponent implements OnInit {
  formCadastro: FormGroup;
  constructor(
    private fb: FormBuilder,
    private usuarioService: UsuarioService
  ) {}

  ngOnInit(): void {
    this.initFormulario();
  }
  initFormulario() {
    this.formCadastro = this.fb.group({
      Nome: this.fb.control('', [Validators.required]),
      Sobrenome: this.fb.control('', [Validators.required]),
      Email: this.fb.control('', [Validators.required]),
      Senha: this.fb.control('', [Validators.required]),
    });
  }
  submit() {
    this.usuarioService.cadastrar(
      this.formCadastro.value
      ).subscribe(
      res=>{
        console.log(res);
      }
    )
    console.log(this.formCadastro.value);
  }
}
