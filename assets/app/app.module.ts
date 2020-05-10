import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { CadastrarComponent } from "./components/cadastrar/cadastar.component";
import { EntrarComponent } from "./components/entrar/entrar.component";
import { UsuarioComponent } from "./components/usuario/usuario.component";
import { myrouting } from "./app.routing";


@NgModule({
  declarations: [AppComponent, EntrarComponent, CadastrarComponent, UsuarioComponent],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, myrouting],
  bootstrap: [AppComponent],
})
export class AppModule {}
