import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { ClienteDeleteComponent } from './component/Customer/customer-delete/cliente-delete.component';
import { ClienteGuardarComponent } from './component/Customer/customer-save/cliente-guardar.component';
import { ClienteListaComponent } from './component/Customer/customer-list/cliente-lista.component';
import { ProyectosListaComponent } from './component/Project/project-list/proyectos-lista.component';
import { ProyectosSaveComponent } from './component/Project/project-save/proyectos-save.component';
import { RequirementsListComponent } from './component/Requirement/requirements-list/requirements-list.component';
import { ClienteEditComponent } from './component/Customer/customer-edit/cliente-edit.component';
import { RequirementsEditComponent } from './component/Requirement/requirements-edit/requirements-edit.component';
import { RequirementsDeleteComponent } from './component/Requirement/requirements-delete/requirements-delete.component';
import { ProjectEditComponent } from './component/Project/project-edit/project-edit.component';

const routes: Routes = [
  { path: 'proyectos-list', component: ProyectosListaComponent},
  { path: 'proyectos-save', component: ProyectosSaveComponent},
  { path: 'clientes-lista', component: ClienteListaComponent},
  { path: 'cliente-delete/:id', component: ClienteDeleteComponent},
  { path: 'cliente-guardar', component: ClienteGuardarComponent},
  { path: 'requirements-list', component: RequirementsListComponent},
  { path: 'cliente-edit/:id', component: ClienteEditComponent},
  { path: 'requirements-edit/:id', component: RequirementsEditComponent},
  { path: 'requirements-delete/:id', component: RequirementsDeleteComponent},
  { path: 'project-edit/:id', component: ProjectEditComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
