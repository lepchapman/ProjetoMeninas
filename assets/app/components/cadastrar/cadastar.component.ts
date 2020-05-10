import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, NgForm } from "@angular/forms";
import { Usuario } from "../usuario/usuario.model";
// import { UsuarioService } from "../usuario/usuario.service";

@Component({
    selector: 'app-cadastrar',
    styleUrls: ['./cadastrar.component.css'],
    templateUrl: './cadastrar.component.html'
})

export class CadastrarComponent implements OnInit{
    // constructor(private usuarioService: UsuarioService){}

    usuarioLoad : Usuario;

    myForm : FormGroup;
    ngOnInit(){
        this.myForm =  new FormGroup({
            firstNameTS: new FormControl(null, Validators.required),
            lastNameTS: new FormControl(null, Validators.required),
            emailTS: new FormControl(null,[
                Validators.required,
                Validators.pattern("[a-zA-Z0-9\-\_\.]+@[a-zA-Z0-9\-\_\.]+")
            ]),
            passwordTS: new FormControl(null,Validators.required)
        });
    }

    onSubmit(form: NgForm){
        console.log(form);
    }
}