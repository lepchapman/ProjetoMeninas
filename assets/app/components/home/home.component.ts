import { Component, OnInit } from "@angular/core";
import { Route, Router } from "@angular/router";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  constructor(private router: Router) {}
  autenticado: boolean = false;
  local = JSON.parse(localStorage.getItem("usuario"));;

  ngOnInit() {
    console.log("Local:", localStorage.getItem("usuario"));
    if (this.local != null) {
      this.autenticado = true;
    } else{
      this.autenticado = false;
    }
    // else {
    //   setTimeout(() => {
    //     alert("localStorage.clear");
    //     window.localStorage.removeItem(this.local);
    //     this.router.navigate(["usuario/entrar"]);
    //   }, this.time);
    // }
  }
  sair() {
    window.localStorage.removeItem("usuario");
    this.router.navigate(["usuario/entrar"]);
  }
  //window.localStorage.removeItem(key);
}
