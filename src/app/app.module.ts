import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProyectosListaComponent } from './component/Project/project-list/proyectos-lista.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ProyectosService } from './service/project.service';
import { ProyectosSaveComponent } from './component/Project/project-save/proyectos-save.component';
import { ClienteListaComponent } from './component/Customer/customer-list/cliente-lista.component';
import { ClienteService } from './service/customer.service';
import { ClienteDeleteComponent } from './component/Customer/customer-delete/cliente-delete.component';
import { ClienteGuardarComponent } from './component/Customer/customer-save/cliente-guardar.component';
import { RequirementsListComponent } from './component/Requirement/requirements-list/requirements-list.component';
import { ClienteEditComponent } from './component/Customer/customer-edit/cliente-edit.component';
import { RequirementsEditComponent } from './component/Requirement/requirements-edit/requirements-edit.component';
import { RequirementsSaveComponent } from './component/Requirement/requirements-save/requirements-save.component';
import { RequirementsDeleteComponent } from './component/Requirement/requirements-delete/requirements-delete.component';
import { ProjectEditComponent } from './component/Project/project-edit/project-edit.component';
import { RequirementService } from './service/requirement.service';

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
    RequirementsSaveComponent,
    RequirementsDeleteComponent,
    ProjectEditComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [
    ProyectosService,
    ClienteService,
    RequirementService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
