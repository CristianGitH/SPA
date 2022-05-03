import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Project } from 'src/app/domain/project';
import { ProyectosService } from 'src/app/service/project.service';

@Component({
  selector: 'app-proyectos-save',
  templateUrl: './proyectos-save.component.html',
  styleUrls: ['./proyectos-save.component.css']
})
export class ProyectosSaveComponent implements OnInit {

  public project!: Project;

  public showMsg: boolean = false;
  public msg!: string;
  public type!: string;

  constructor(public proyectoService: ProyectosService,
    private router: Router)  { }

  ngOnInit(): void {
    this.project = new Project(0, 0, 0, '', new Date(), new Date(), 0, 0);
  }
    public save(){

      this.proyectoService.save(this.project).subscribe(data =>{
      this.router.navigate(['/proyectos-list']);
      }, error => {
        console.log(error);
        this.showMsg = true;
        this.msg = error.error.Message;
        this.type = 'danger';
      });
    }
  }

