import { Component } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
    selector: "app-entrar",
    templateUrl: "./entrar.component.html",
    styleUrls: ["./entrar.component.css"]
}) 

export class EntrarComponent{
    myForm : FormGroup;
    onSubmit(){
        console.log(this.myForm);
        this.myForm.reset();
    }
    ngOnInit(){
        this.myForm =  new FormGroup({
            emailTs: new FormControl(null,[
                Validators.required,
                Validators.pattern("[a-zA-Z0-9\-\_\.]+@[a-zA-Z0-9\-\_\.]+")
            ]),
            passwordTS: new FormControl(null,Validators.required)
        });
    }
}

