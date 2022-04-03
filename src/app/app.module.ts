import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProyectosListaComponent } from './component/proyectos-lista/proyectos-lista.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ProyectosService } from './service/proyectos.service';
import { ProyectosSaveComponent } from './component/proyectos-save/proyectos-save.component';



@NgModule({
  declarations: [
    AppComponent,
    ProyectosListaComponent,
    ProyectosSaveComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [
    ProyectosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
