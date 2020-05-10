import { Routes, RouterModule } from "@angular/router";
import { EntrarComponent } from "./components/entrar/entrar.component";
import { CadastrarComponent } from "./components/cadastrar/cadastar.component";

const APP_ROUTER: Routes = [
  { path: "", redirectTo: "/Entrar", pathMatch: "full" },
  { path: "Entrar", component: EntrarComponent },
  { path: "Cadastrar", component: CadastrarComponent },
];

export const myrouting = RouterModule.forRoot(APP_ROUTER);
