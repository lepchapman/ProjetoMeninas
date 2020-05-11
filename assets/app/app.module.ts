import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { myrouting } from "./app.routing";
import { AppComponent } from "./app.component";
import { CadastrarComponent } from "./components/cadastrar/cadastrar.component";
import { EntrarComponent } from "./components/entrar/entrar.component";
import { UsuarioComponent } from "./components/usuario/usuario.component";
import { HomeComponent } from "./components/home/home.component";
@NgModule({
  declarations: [
    AppComponent,
    CadastrarComponent,
    EntrarComponent,
    UsuarioComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    myrouting,
    HttpModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
