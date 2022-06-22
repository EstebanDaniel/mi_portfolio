import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutenticacionService } from 'src/app/services/autenticacion.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private autenticacionService: AutenticacionService, private rutanav: Router) { }

  ngOnInit(): void {
  }


 onLogOut(){
 
 this.autenticacionService.logOut();
 window.location.reload();
 //this.rutanav.navigate(['/iniciar-sesion']);
 //console.log(this.onLogOut);
 

 }

}
