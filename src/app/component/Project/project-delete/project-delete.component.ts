import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Project } from 'src/app/domain/project';
import { ProyectosService } from 'src/app/service/project.service';

@Component({
  selector: 'app-project-delete',
  templateUrl: './project-delete.component.html',
  styleUrls: ['./project-delete.component.css']
})
export class ProjectDeleteComponent implements OnInit {

  public id!: number;
  public project!: Project;

  public showMsg: boolean = false;
  public msg!: string;
  public type!: string;

  constructor(public projectService: ProyectosService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getById();
  }
  public getById(){
    let param = this.activatedRoute.snapshot.paramMap.get('id');
    this.id = Number(param);

    this.projectService.getById(this.id).subscribe(data => {
      this.project= data;
    });
  }
  public delete(){

    this.projectService.delete(this.project.ProjectID).subscribe(data => {
      this.router.navigate(['/proyectos-list']);
    }, error => {

      console.log(error);
      this.showMsg = true;
      this.msg = error.error.Message;
      this.type = 'danger';
    });
  }
}