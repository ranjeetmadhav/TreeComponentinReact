import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class HeroService {
endPoint ='http://localhost:5000/api/v1/employees';

  constructor(public _http: HttpClient) { }
 
  getAll (){
    return this._http.get(this.endPoint);
    }
    
  }




