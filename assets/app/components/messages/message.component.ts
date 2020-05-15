import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Message } from "./message.model";
import { MessageService } from "./message.service";
@Component({
  selector: "app-messages",
  templateUrl: "./message.component.html",
  styleUrls: ["./message.component.css"],
})
export class MessagesComponent {
  @Input() messageVarClasse: Message = new Message("", "");
  constructor(private messageServiceObj: MessageService) {}
  onEditService() {
    this.messageServiceObj.editMessage(this.messageVarClasse);
  }
  onDeleteService() {
    debugger;
    this.messageServiceObj.deleteMessage(this.messageVarClasse).subscribe(
      (dadosSucesso) => console.log(dadosSucesso),
      (dadosErro) => console.log(dadosErro)
    );
  }
}
