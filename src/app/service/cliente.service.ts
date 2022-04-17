import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cliente } from '../domain/cliente';
@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  public url: string;

  constructor(public httpclient: HttpClient) { 
    this.url = '';
  }

  public getAll():Observable<any>{
    return this.httpclient.get(this.url);
  }

  //Llamado por ID
  public getById(id: number): Observable<any> {
    return this.httpclient.get(this.url + id)
  };

  //Eliminar Cliente
  public delete(id: number) {
    return this.httpclient.delete(this.url + id);
  }

  public edit(cliente: Cliente): Observable<any>{
    return this.httpclient.put(this.url + cliente.Cliente_id, cliente);
  };

}
