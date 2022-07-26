import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import {finalize, Observable} from 'rxjs';
import { AutenticacionService } from './autenticacion.service';
import { LoaderService } from './loader.service';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor{

  constructor(private autenticacionService: AutenticacionService, public loaderService:LoaderService) { }

intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

 this.loaderService.isLoading.next(true);
 

  var currentUser = this.autenticacionService.UsuarioAutenticado;

  if(currentUser && currentUser.accessToken)
  {
    
   req= req.clone({
  
  setHeaders:{

    Authorization: `Bearer ${currentUser.accessToken}`
  }

   })

  }

  //console.log("interceptor esta corriendo"+ JSON.stringify(currentUser));
return next.handle(req).pipe(
  finalize
  ( () => {

    this.loaderService.isLoading.next(false);
  }

  )
  
  );

}

}
