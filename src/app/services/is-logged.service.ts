import { Injectable } from '@angular/core';
import { AutenticacionService } from './autenticacion.service';

@Injectable({
  providedIn: 'root'
})
export class IsLoggedService {

  constructor(private authService: AutenticacionService) { }

  
  isLogin():boolean {

    if( this.authService.isLogged === false)
    {
     return false;
   }else{
     return true;
   }
    
   }
   
}
