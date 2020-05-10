import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators, NgForm } from "@angular/forms";
import { Usuario } from "../usuario/usuario.model";

@Component({
  selector: "app-cadastrar",
  templateUrl: "./cadastrar.component.html",
  styleUrls: ["./cadastrar.component.css"],
})
export class CadastrarComponent implements OnInit {
  usuarioLoad: Usuario;
  myForm: FormGroup;
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
  //constructor(private messageService: MessageService) {}
  // messageLoad: Message;
  onSubmit(form: NgForm) {
    console.log(form);
    //form.resetForm();
    //   this.myForm.reset();
    // if (this.messageLoad) {
    //   this.messageLoad.content = form.value.myContentngForm;
    //   this.messageService.updateMessage(this.messageLoad).subscribe(
    //       dadosSucesso => console.log(dadosSucesso),
    //       dadosErro => console.log(dadosErro)
    //   );
    //   this.messageLoad = null;
    // } else {
    //   const messageAux = new Message(form.value.myContentngForm, "Teste");
    //   this.messageService.addMessage(messageAux).subscribe(
    //     (dadosSucesso) => console.log(dadosSucesso),
    //     (dadosErro) => console.log(dadosErro)
    //   );

    // }
  }
  // onSave(textCosole: string) {
  //   const messageAux = new Message(textCosole, "Teste");
  //   this.messageService.addMessage(messageAux);
  //   console.log(textCosole);
  // }
  // ngOnInit() {
  //   this.messageService.messageIsEdit.subscribe(
  //     (message: Message) => (this.messageLoad = message)
  //   );
  // }
  // onClear(form: NgForm) {
  //   this.messageLoad = null;
  //   form.resetForm();
  // }
}
