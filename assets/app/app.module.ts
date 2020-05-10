import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CadastrarComponent } from './components/cadastrar/cadastar.component';
import { AppComponent } from "./app.component";
import { FormsModule , ReactiveFormsModule } from "@angular/forms";

@NgModule({
    declarations: [AppComponent, CadastrarComponent],
    imports: [BrowserModule, FormsModule , ReactiveFormsModule],
    bootstrap: [AppComponent]
})
export class AppModule {

}