import { Routes, RouterModule } from "@angular/router";
import { EntrarComponent } from "../app/components/entrar/entrar.component";
import { CadastrarComponent } from "../app/components/cadastrar/cadastrar.component";
import { HomeComponent } from "../app/components/home/home.component";
import { UsuarioService } from "../app/components/usuario/usuario.service";
const APP_ROUTER: Routes = [
  { path: "", redirectTo: "/entrar", pathMatch: "full" },
  {
    path: "entrar",
    component: EntrarComponent,
  },
  {
    path: "cadastrar",
    component: CadastrarComponent,
  },
  {
    path: "home",
    component: HomeComponent, 
    canActivate:[UsuarioService]
  },
];
export const myrouting = RouterModule.forRoot(APP_ROUTER);
