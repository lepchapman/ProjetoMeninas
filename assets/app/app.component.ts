import { Component } from "@angular/core";
import { EntrarComponent } from "./components/entrar/entrar.component";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styles: [
    `
      .container .row {
        margin: 120px auto;
        width: 60%;
      }

      a.link-nav {
        text-decoration: none;
        cursor: pointer;
        margin: 0 90px;
      }
    `,
  ],
})
export class AppComponent {}

