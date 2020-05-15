import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { MessageService } from "../messages/message.service";
import { Message } from "../messages/message.model";

@Component({
  selector: "app-message-input",
  templateUrl: "./message-input.component.html",
  styleUrls: ["./message-input.component.css"],
})
export class MessageInputComponent implements OnInit {
  constructor(private messageService: MessageService) {}
  messageLoad: Message;
  onSubmit(form: NgForm) {
    debugger;
    if (this.messageLoad) {
      this.messageLoad.content = form.value.myContentngForm;
      this.messageService.updateMessage(this.messageLoad).subscribe(
          dadosSucesso => console.log(dadosSucesso),
          dadosErro => console.log(dadosErro)
      );
      this.messageLoad = null;
    } else {
      const messageAux = new Message(form.value.myContentngForm, "Teste");
      this.messageService.addMessage(messageAux).subscribe(
        (dadosSucesso) => console.log(dadosSucesso),
        (dadosErro) => console.log(dadosErro)
      );
      form.resetForm();
    }
  }
  onSave(textCosole: string) {
    const messageAux = new Message(textCosole, "Teste");
    this.messageService.addMessage(messageAux);
  }
  ngOnInit() {
    this.messageService.messageIsEdit.subscribe(
      (message: Message) => (this.messageLoad = message)
    );
  }
  onClear(form: NgForm) {
    this.messageLoad = null;
    form.resetForm();
  }
}
