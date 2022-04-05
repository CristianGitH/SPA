import { Component, OnInit } from '@angular/core';
import { Proyectos } from 'src/app/domain/proyectos';
import { ProyectosService } from 'src/app/service/management.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-proyectos-lista',
  templateUrl: './proyectos-lista.component.html',
  styleUrls: ['./proyectos-lista.component.css']
})
export class ProyectosListaComponent implements OnInit {

  public proyectos!: Proyectos[];
  public subProyectos!: Subscription;

  constructor(public proyectoService: ProyectosService) { }

  ngOnDestroy(): void{
    this.subProyectos!.unsubscribe();

  }
  ngOnInit(): void {
    this.getAll();
  }

  getAll(){
    this.subProyectos! = this.proyectoService.getAll().subscribe(data =>{
      this.proyectos! = data;
    });

  }

}
