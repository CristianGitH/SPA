import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyectos } from 'src/app/domain/proyectos';
import { ProyectosService } from 'src/app/service/management.service';

@Component({
  selector: 'app-proyectos-save',
  templateUrl: './proyectos-save.component.html',
  styleUrls: ['./proyectos-save.component.css']
})
export class ProyectosSaveComponent implements OnInit {


  public proyecto!: Proyectos;

  public showMsg: boolean = false;
  public msg!: string;
  public type!: string;

  constructor(public proyectoService: ProyectosService,
    private router: Router)  { }

  ngOnInit(): void {
    this.proyecto = new Proyectos(0, '','','',);
  }
    public save(){

      console.log(this.proyecto);

      this.proyectoService.save(this.proyecto).subscribe(data =>{
      this.router.navigate(['/proyectos-list']);
      }, error => {
        console.log(error);
        this.showMsg = true;
        this.msg = 'An error has ocurred in the procedure';
        this.type = 'danger';
      });
    }
  }

