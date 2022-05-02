import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Project } from '../domain/proyectos';

@Injectable({
  providedIn: 'root'
})
export class ProyectosService {
  public url: string;

  constructor(public httpClient: HttpClient) {
    this.url = 'https://api-arq.azurewebsites.net/api/Project';
   }

  public getAll():Observable<any>{
    return this.httpClient.get(this.url);
  }

  public getById(id: number):Observable<any>{
    return this.httpClient.get(`${this.url}/${id}`);
  }

  public save(project: Project): Observable<any>{
    return this.httpClient.post(this.url, project);
  }

  public edit(project: Project): Observable<any>{
    return this.httpClient.put(`${this.url}/${project.ProjectId}`, project);
  }
}
