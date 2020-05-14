import { Routes } from "@angular/router";
import { EntrarComponent } from "../entrar/entrar.component";
import { CadastrarComponent } from "../cadastrar/cadastrar.component";

export const USUARIO_ROUTES: Routes = [
    { path: 'usuario', redirectTo: 'entrar', pathMatch: 'full' },
    { path: 'entrar', component: EntrarComponent },
    { path: 'cadastrar', component: CadastrarComponent },
];
