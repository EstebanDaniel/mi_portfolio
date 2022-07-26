import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutenticacionService } from 'src/app/services/autenticacion.service';
import { LoaderService } from 'src/app/services/loader.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private autenticacionService: AutenticacionService, private rutanav: Router, public loaderService:LoaderService) { }

  ngOnInit(): void {
  }


  @HostListener('window:beforeunload', ["$event"]) 
  DoYouClose() {
      const confirmar = confirm("¿Seguro desea salir de la aplicación?");
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


}
