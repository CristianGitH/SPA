import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Proyectos } from '../domain/proyectos';

@Injectable({
  providedIn: 'root'
})
export class ProyectosService {
  public url: string;

  constructor(public httpClient: HttpClient) {
    this.url = './assets/MOCK_DATA';
   }

  public getAll():Observable<any>{
    return this.httpClient.get(this.url);
  }
  public save(proyectos: Proyectos): Observable<any>{
    return this.httpClient.post(this.url, Proyectos);
  }
}
