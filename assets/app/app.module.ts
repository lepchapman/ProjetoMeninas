import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EntrarComponent } from "./components/entrar/entrar.component";
import { FormsModule , ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";

@NgModule({
    declarations: [
        AppComponent, EntrarComponent
    ],
    imports: [BrowserModule, FormsModule , ReactiveFormsModule],
    bootstrap: [AppComponent]
})
export class AppModule {

}