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
import { ClienteDeleteComponent } from './component/cliente-delete/cliente-delete.component';
import { ClienteGuardarComponent } from './component/cliente-guardar/cliente-guardar.component';
import { RequirementsListComponent } from './component/requirements-list/requirements-list.component';
import { ClienteEditComponent } from './component/cliente-edit/cliente-edit.component';
import { RequirementsEditComponent } from './component/requirements-edit/requirements-edit.component';
import { RequirementsSaveComponent } from './component/requirements-save/requirements-save.component';

@NgModule({
  declarations: [
    AppComponent,
    ProyectosListaComponent,
    ProyectosSaveComponent,
    ClienteListaComponent,
    ClienteDeleteComponent,
    ClienteGuardarComponent,
    RequirementsListComponent,
    ClienteEditComponent,
    RequirementsEditComponent,
    RequirementsSaveComponent

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
