import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { UsuarioService } from "./components/usuario/usuario.service";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { InterceptorService } from "./components/utils/interceptor.service";
import { LoginComponent } from "./components/login/login.component";
// import { CadastrarComponent } from "./components/cadastrar/cadastrar.component";
@NgModule({
  declarations: [AppComponent, LoginComponent],
  imports: [BrowserModule],
  providers: [
    UsuarioService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
