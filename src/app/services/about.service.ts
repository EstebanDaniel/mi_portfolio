import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
//import { url } from 'inspector';
import { Observable } from 'rxjs';
import { Persona } from '../Models/intefazPersona';
@Injectable({
  providedIn: 'root'
})
export class AboutService {
 
  apiServerUrl= environment.apiBaseURL;

  constructor(private http:HttpClient) { }



public getUser(): Observable<Persona> {
  return this.http.get<Persona>(`${this.apiServerUrl}persona/id/1`)
 
}  

public updatePersona(persona:Persona):Observable<Persona> {
return this.http.put<Persona>(`${this.apiServerUrl}persona/update`,persona);
}


}

