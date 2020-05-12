import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { UsuarioService } from "../usuario/usuario.service";
import { Router } from "@angular/router";
@Component({
  selector: "app-entrar",
  templateUrl: "./entrar.component.html",
  styleUrls: ["./entrar.component.css"],
})
export class EntrarComponent implements OnInit{
  myForm: FormGroup;
  error: any;
  constructor(private usuarioService: UsuarioService, private router: Router) {}
  onSubmit() {
    console.log(this.myForm);
    this.myForm.reset();
  }
  ngOnInit() {
    this.myForm = new FormGroup({
      emailTS: new FormControl(null, [
        Validators.required,
        Validators.pattern("[a-zA-Z0-9-_.]+@[a-zA-Z0-9-_.]+"),
      ]),
      passwordTS: new FormControl(null, Validators.required),
    });
  }
  // entrar(email:string, password:string){
  //   this.usuarioService.entrar(email,password).subscribe(
  //     sucess=>this.router.navigate(['home']),
  //     error=>this.error = error
  //   )
  // }
}
