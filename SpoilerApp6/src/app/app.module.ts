import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {FormsModule} from "@angular/forms";
import { PeliculaBannerComponent } from './peliculas/pelicula-banner/pelicula-banner.component';
import { EjercicioComponent } from './ejercicio/ejercicio.component';
import { GrillaComponent } from './grilla/grilla.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {ButtonModule} from 'primeng/button';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from "@angular/material";

@NgModule({
  declarations: [
    AppComponent,
    PeliculaBannerComponent,
    EjercicioComponent,
    GrillaComponent
  ], // Definir todos los componentes a usarse
     // Definin todos los pipes -> transforman datos
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule.forRoot(),
    ButtonModule,
    BrowserAnimationsModule,
    MatButtonModule
  ], //  Definimos todos los Modulos
  providers: [], // Los Servicios
  bootstrap: [AppComponent] // Componente Principal
})
// @ALGO() // Decorator


export class AppModule {
}
