import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteDeleteComponent } from './component/cliente-delete/cliente-delete.component';
import { ClienteGuardarComponent } from './component/cliente-guardar/cliente-guardar.component';
import { ClienteListaComponent } from './component/cliente-lista/cliente-lista.component';
import { ProyectosListaComponent } from './component/proyectos-lista/proyectos-lista.component';
import { ProyectosSaveComponent } from './component/proyectos-save/proyectos-save.component';
import { RequirementsListComponent } from './component/requirements-list/requirements-list.component';
import { ClienteEditComponent } from './component/cliente-edit/cliente-edit.component';
import { RequirementsEditComponent } from './component/requirements-edit/requirements-edit.component';
import { RequirementsDeleteComponent } from './component/requirements-delete/requirements-delete.component';
import { ProjectEditComponent } from './component/project-edit/project-edit.component';

const routes: Routes = [
  { path: 'proyectos-list', component: ProyectosListaComponent},
  { path: 'proyectos-save', component: ProyectosSaveComponent},
  { path: 'clientes-lista', component: ClienteListaComponent},
  { path: 'cliente-delete/:id', component: ClienteDeleteComponent},
  { path: 'cliente-guardar', component: ClienteGuardarComponent},
  { path: 'requirements-list', component: RequirementsListComponent},
  { path: 'clientes-edit/:id', component: ClienteEditComponent},
  { path: 'requirements-edit/:id', component: RequirementsEditComponent},
  { path: 'requirements-delete/:id', component: RequirementsDeleteComponent},
  { path: 'project-edit/:id', component: ProjectEditComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
