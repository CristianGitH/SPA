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
    this.url = './assets/Requirements.json';
  }

  public getAll():Observable<any>{
    return this.httpClient.get(this.url);        
  }
}