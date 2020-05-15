import { Component } from "@angular/core";
import { UsuarioService } from "../app/components/usuario/usuario.service";
import { MessageService } from "../app/components/messages/message.service";
@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  providers:[UsuarioService,MessageService]
})
export class AppComponent {

}
