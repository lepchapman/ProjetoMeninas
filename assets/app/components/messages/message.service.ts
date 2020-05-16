import { Http, Response, Headers } from "@angular/http";
import { Injectable, EventEmitter } from "@angular/core";
import { Message } from "./message.model";
import "rxjs/Rx";
import { Observable } from "rxjs";

@Injectable()
export class MessageService {
  private messageSService: Message[] = [];
  public apiRoot = "http://localhost:3000/home/mensagens";
  messageIsEdit = new EventEmitter<Message>();
  local = JSON.parse(localStorage.getItem("usuario"));

  constructor(private http: Http) {}

  addMessage(message: Message) {
    console.log('localaddMessage',this.local);
   // console.log("messageSService ADD:", this.messageSService);
    const bodyReq = JSON.stringify(message);
    const myHeaders = new Headers({ "Content-Type": "application/json" });
    return this.http
      .post(this.apiRoot, bodyReq, {
        headers: myHeaders,
      })
      .map((responseRecebida: Response) => {
        var aux = responseRecebida.json();
        const newObjMessage = new Message(
          aux.objMessageSave.content,
          this.local.nome,
          aux.objMessageSave._id,
          this.local.email
        );
        this.messageSService.push(newObjMessage);
        return newObjMessage;
      })
      .catch((errorRecebido: Response) =>
        Observable.throw(errorRecebido.json())
      );
  }

  getMessages() {
    return this.http
      .get(this.apiRoot)
      .map((resposeRecebida: Response) => {
        const responseEmJson = resposeRecebida.json();
        const messageSResponseRecebida = responseEmJson.objsMessageSRecuperados;
        let transformedCastMassagesModelFrontEnd: Message[] = [];
        for (let msg of messageSResponseRecebida) {
          transformedCastMassagesModelFrontEnd.push(
            new Message(msg.content, "Nayara", msg._id, null)
          );
        }
        this.messageSService = transformedCastMassagesModelFrontEnd;
        return transformedCastMassagesModelFrontEnd;
      })
      .catch((erroRecebido: Response) => Observable.throw(erroRecebido.json()));
  }
  updateMessage(message: Message) {
    const bodyReq = JSON.stringify(message);
    const myHeaders = new Headers({ "Content-Type": "application/json" });
    return this.http
      .patch(this.apiRoot + "/" + message.messageId, bodyReq, {
        headers: myHeaders,
      })
      .map((responseRecebida: Response) => responseRecebida.json())
      .catch((errorRecebido: Response) =>
        Observable.throw(errorRecebido.json())
      );
  }
  editMessage(message: Message) {
    this.messageIsEdit.emit(message);
  }
  deleteMessage(message: Message) {
    this.messageSService.splice(this.messageSService.indexOf(message), 1);
    return this.http
      .delete(this.apiRoot + "/" + message.messageId)
      .map((responseRecebida: Response) => responseRecebida.json())
      .catch((errorRecebido: Response) =>
        Observable.throw(errorRecebido.json())
      );
  }
}
