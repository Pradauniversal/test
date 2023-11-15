import { CommonModule } from '@angular/common';

import {  bootstrapApplication } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { HttpClientModule } from '@angular/common/http'; // Importa HttpClientModule
import { AppComponent } from './app.component';
import { AppComponentContainer } from './app.component.container';
import { BrowserModule } from '@angular/platform-browser';

import { DatosService } from "./datosServices/datos.service.service";
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    // AppComponent,
    AppComponentContainer
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    HttpClientModule // Agrega HttpClientModule aquí
  ],
  providers: [DatosService],
  bootstrap: [AppComponentContainer]

  
})

 
export class AppModule { }
