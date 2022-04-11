import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProyectosListaComponent } from './component/proyectos-lista/proyectos-lista.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ProyectosService } from './service/management.service';
import { ProyectosSaveComponent } from './component/proyectos-save/proyectos-save.component';
import { ClienteListaComponent } from './component/cliente-lista/cliente-lista.component';
import { ClienteService } from './service/cliente.service';


@NgModule({
  declarations: [
    AppComponent,
    ProyectosListaComponent,
    ProyectosSaveComponent,
    ClienteListaComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [
    ProyectosService,
    ClienteService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
