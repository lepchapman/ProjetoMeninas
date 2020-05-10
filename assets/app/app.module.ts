import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule , ReactiveFormsModule } from "@angular/forms";
import { myrouting } from "./app.routing";
import { AppComponent } from "./app.component";
import { CadastrarComponent } from "./components/cadastrar/cadastrar.component";
import { EntrarComponent } from './components/entrar/entrar.component';
import { UsuarioComponent } from "./components/usuario/usuario.component";
@NgModule({
    declarations: [
        AppComponent,CadastrarComponent,EntrarComponent,UsuarioComponent
    ],
    imports: [BrowserModule,FormsModule,ReactiveFormsModule,myrouting],
    bootstrap: [AppComponent]
})
export class AppModule {

}