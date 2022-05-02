import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/domain/project';
import { ProyectosService } from 'src/app/service/project.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-proyectos-lista',
  templateUrl: './proyectos-lista.component.html',
  styleUrls: ['./proyectos-lista.component.css']
})
export class ProyectosListaComponent implements OnInit {

  public projects!: Project[];
  public subProjects!: Subscription;

  constructor(public proyectoService: ProyectosService) { }

  ngOnDestroy(): void{
    this.subProjects!.unsubscribe();

  }
  ngOnInit(): void {
    this.getAll();
  }

  getAll(){
    this.subProjects! = this.proyectoService.getAll().subscribe(data =>{
      this.projects! = data;
    });

  }

}
