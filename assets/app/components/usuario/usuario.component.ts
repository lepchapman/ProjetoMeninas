import { Component, Input, Output, EventEmitter } from "@angular/core";
import { UsuarioI } from "../usuario/usuario.interface";
import { UsuarioService } from "../usuario/usuario.service";
import { environment } from "../environment/environment";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
@Component({
  selector: "app-usuario",
  template: `
    <div class="body">
      <div class="contact-wrapper">
        <router-outlet></router-outlet>
      </div>
    </div>
  `,
  styles: [
    `
      .body {
      
        background-size: cover;
        display: table;
        height: 657px;
        width: 100%;
        text-align: center;
        margin: 0 auto;
        overflow: hidden;
      }
      *,
      *:before,
      *:after {
        box-sizing: border-box;
      }

      .contact-wrapper {
        margin: 15px auto;
        background: #fff;
        border-radius: 5px;
        padding: 1em;
        width: 35%;
        height: 500px;
        -webkit-box-shadow: 0 30px 60px 0 rgba(0, 0, 0, 0.3);
        box-shadow: 0 30px 60px 0 rgba(0, 0, 0, 0.3);
      }
    `,
  ],
})
export class UsuarioComponent {
  constructor() {}
  ngOnInit(): void {}
}
