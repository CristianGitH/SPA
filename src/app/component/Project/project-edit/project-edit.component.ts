import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Project } from 'src/app/domain/project';
import { ProyectosService } from 'src/app/service/project.service';

@Component({
  selector: 'app-project-edit',
  templateUrl: './project-edit.component.html',
  styleUrls: ['./project-edit.component.css']
})
export class ProjectEditComponent implements OnInit {
  public id!: number;
  public project!: Project;

  public showMsg: boolean = false;
  public msg!: string;
  public type!: string;
  public activatedRoute: any;

  constructor(public proyectoService: ProyectosService,
    private router: Router,
    activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getById();
  }

  public getById(){
    let param = this.activatedRoute.params['_value'];
    this.id=param.id;

    this.proyectoService.getById(this.id).subscribe(data => {
      this.project= data;
    });
  }

  public edit(){

    this.proyectoService.edit(this.project).subscribe(data => {
      this.router.navigate(['/proyectos-list']);
    }, error => {

      console.log(error);
      this.showMsg = true;
      this.msg = 'An error has ocurred in the procedure';
      this.type = 'danger';
    });
  }
}
