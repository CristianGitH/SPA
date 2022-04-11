import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteListaComponent } from './component/cliente-lista/cliente-lista.component';
import { ProyectosListaComponent } from './component/proyectos-lista/proyectos-lista.component';
import { ProyectosSaveComponent } from './component/proyectos-save/proyectos-save.component';
const routes: Routes = [
  { path: 'proyectos-list', component: ProyectosListaComponent},
  { path: 'proyectos-save', component: ProyectosSaveComponent},
  { path: 'clientes-lista', component: ClienteListaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
