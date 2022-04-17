import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cliente } from '../domain/cliente';
@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  public url: string;

  constructor(public httpClient: HttpClient) {
    this.url = 'http://localhost/Manegement.API/api/Clientes/';
  }

  public getAll():Observable<any>{
    return this.httpClient.get(this.url);
  }

  //Llamado por ID
  public getById(id: number): Observable<any> {
    return this.httpClient.get(this.url + id)
  };

  //Eliminar Cliente
  public delete(id: number) {
    return this.httpClient.delete(this.url + id);
  }

  public save(cliente: Cliente): Observable<any>{
    return this.httpClient.post(this.url, cliente)
  }
}
