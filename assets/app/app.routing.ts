import { Routes, RouterModule } from "@angular/router";
import { USUARIO_ROUTES } from "../app/components/usuario/usuario.routers";
import { HomeComponent } from "../app/components/home/home.component";
import { UsuarioComponent } from "../app/components/usuario/usuario.component"
const APP_ROUTER: Routes = [
  { path: "", redirectTo: "usuario/entrar", pathMatch: "full" },
  {
    path: "usuario",
    component:UsuarioComponent,
    children:USUARIO_ROUTES
  },
  {
    path: "home",
    component: HomeComponent,
  },
];
export const myrouting = RouterModule.forRoot(APP_ROUTER);
