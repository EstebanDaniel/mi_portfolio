import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Proyectos } from '../Models/InterfazProyectos';

@Injectable({
  providedIn: 'root'
})
export class ProyectService {

  apiServerUrl=environment.apiBaseURL

  constructor(private http:HttpClient) { }

  public getProyectos():Observable<Proyectos[]>{
    return this.http.get<Proyectos[]>(`${this.apiServerUrl}proyectos/all`);
  
  }
  
  public addProyectos(proyectos:Proyectos):Observable<Proyectos>{
  return this.http.post<Proyectos>(`${this.apiServerUrl}proyectos/add`,proyectos);
  
  }
  
  public updateProyectos(proyectos:Proyectos):Observable<Proyectos>{
  return this.http.put<Proyectos>(`${this.apiServerUrl}proyectos/edit`,proyectos);
  
  
  }
  
  public deleteProyectos(proyectosId:number):Observable<void>{
  return this.http.delete<void>(`${this.apiServerUrl}proyectos/delete${proyectosId}`);
  
  }
  

}
