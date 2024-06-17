import { Component, HostListener, OnInit } from '@angular/core';
import { AutenticacionService } from 'src/app/services/autenticacion.service';
import { IsLoggedService } from 'src/app/services/is-logged.service';
import { LoaderService } from 'src/app/services/loader.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private autenticacionService: AutenticacionService, public loaderService:LoaderService,private isLogged:IsLoggedService) { }

  ngOnInit(): void {
  }


  @HostListener('window:beforeunload', ["$event"]) 
  DoYouClose() {
      const confirmar = confirm("¿Seguro desea salir del modo edición?");
      if (confirmar) {
        this.onLogOut()
          
      }
  }

  onLogOut(){
 
    this.autenticacionService.logOut();
    window.location.reload();
    //this.rutanav.navigate(['/iniciar-sesion']);
    //console.log(this.onLogOut);
    
    }

    isLoginIn():boolean{

      return this.isLogged.isLogin();
      
      }


}
