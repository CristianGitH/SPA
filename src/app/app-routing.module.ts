import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteDeleteComponent } from './component/cliente-delete/cliente-delete.component';
import { ClienteEditComponent } from './component/cliente-edit/cliente-edit.component';
import { ClienteListaComponent } from './component/cliente-lista/cliente-lista.component';
import { ProyectosListaComponent } from './component/proyectos-lista/proyectos-lista.component';
import { ProyectosSaveComponent } from './component/proyectos-save/proyectos-save.component';

const routes: Routes = [
  { path: 'proyectos-list', component: ProyectosListaComponent},
  { path: 'proyectos-save', component: ProyectosSaveComponent},
  { path: 'clientes-lista', component: ClienteListaComponent},
  { path: 'clientes-delete', component: ClienteDeleteComponent},
  { path: 'clientes-edit/:id', component: ClienteEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
