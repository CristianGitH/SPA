import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from '../domain/customer';
@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  public url: string;

  constructor(public httpClient: HttpClient) {
    this.url = 'https://api-arq.azurewebsites.net/api/Customer';
  }

  public getAll():Observable<any>{
    return this.httpClient.get(this.url);
  }

  //Llamado por ID
  public getById(id: number): Observable<any> {
    return this.httpClient.get(`${this.url}/${id}`)
  };

  //Eliminar Cliente
  public delete(id: number) {
    return this.httpClient.delete(`${this.url}/${id}`);
  }

  public save(cliente: Customer): Observable<any>{
    return this.httpClient.post(this.url, cliente)
  }

  public edit(cliente: Customer): Observable<any>{
    return this.httpClient.put(`${this.url}/${cliente.CustomerID}`, cliente);
  };

}
