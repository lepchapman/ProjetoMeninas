import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
    selector: 'app-cadastrar',
    styleUrls: ['./cadastrar.component.css'],
    templateUrl: './cadastrar.component.html'
})

export class CadastrarComponent{
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
}