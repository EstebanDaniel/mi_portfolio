import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Educacion } from '../Models/interfazEducacion';

@Injectable({
  providedIn: 'root'
})
export class EducationService {

  apiServerUrl=environment.apiBaseURL

  constructor(private http: HttpClient) { }

public getEduacion():Observable<Educacion[]>{
  return this.http.get<Educacion[]>(`${this.apiServerUrl}educacion/all`);

}

public addEducacion(educacion:Educacion):Observable<Educacion>{
return this.http.post<Educacion>(`${this.apiServerUrl}educacion/add`,educacion);

}

public updateEducacion(educacion:Educacion):Observable<Educacion>{
return this.http.put<Educacion>(`${this.apiServerUrl}educacion/edit`,educacion);


}

public deleteEducacion(educacionId:number):Observable<void>{
return this.http.delete<void>(`${this.apiServerUrl}educacion/delete${educacionId}`);

}





}

