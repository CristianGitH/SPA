import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Requirement } from '../domain/requirement';

@Injectable({
  providedIn: 'root'
})
export class RequirementService {

  public url: string;

  constructor(public httpClient: HttpClient) {
    this.url = 'https://api-arq.azurewebsites.net/api/Requirement';
  }

  public getAll():Observable<any>{
    return this.httpClient.get(this.url);
  }

  public save(requirement: Requirement): Observable<any>{
    return this.httpClient.post(this.url, requirement);
  }

  public edit(requirement: Requirement): Observable<any>{
    return this.httpClient.put(`${this.url}/${requirement.RequirementID}`, requirement);
  };

  public getById(id: number): Observable<any> {
    return this.httpClient.get(`${this.url}/${id}`)
  };

  public delete(id: number) {
    return this.httpClient.delete(`${this.url}/${id}`)
  };

}
