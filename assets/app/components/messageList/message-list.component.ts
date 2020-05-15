import { Component, OnInit } from "@angular/core";
import { Message } from "../messages/message.model";
import { MessageService } from "../messages/message.service";

@Component({
  selector: "app-message-list",
  styleUrls: [
    `
    `,
  ],
  template: `
    <div class="col-md-10"><app-message-input></app-message-input></div>
    <div class="col-md-10">
      <app-messages
        [messageVarClasse]="msg"
        (editClicked_Message)="msg.content = $event"
        *ngFor="let msg of messageS"
      >
      </app-messages>
    </div>
  `,
})
export class MessageListComponent implements OnInit {
  messageS: Message[] = [
    new Message("Erro ao acessar o banco", "najuleflix"),
    new Message("Erro ao acessar o banco", "najuleflix"),
    new Message("Erro ao acessar o banco", "najuleflix"),
  ];

  constructor(private messageService: MessageService) {}

  ngOnInit(): void {
    this.messageService.getMessages().subscribe(
      (dadosSucesso: Message[]) => {
        this.messageS = dadosSucesso;
        console.log(dadosSucesso);
      },
      (dadosErro) => console.log(dadosErro)
    );
  }
}
