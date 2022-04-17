import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
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
}
