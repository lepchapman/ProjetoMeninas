import { Component } from "@angular/core";
import { UsuarioService } from "../app/components/usuario/usuario.service";
@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  providers:[UsuarioService]
})
export class AppComponent {

}
