import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { AcercaDeComponent } from '../components/acerca-de/acerca-de.component';
import { EducacionComponent } from '../components/educacion/educacion.component';
import { ExperienciaComponent } from '../components/experiencia/experiencia.component';
import { HardComponent } from '../components/hard/hard.component';
import { IniciarSesionComponent } from '../components/iniciar-sesion/iniciar-sesion.component';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { PortfolioComponent } from '../components/portfolio/portfolio.component';
import { ProyectoComponent } from '../components/proyecto/proyecto.component';
import { GuardGuard } from '../services/guard.guard';

const routes: Routes = [

  {path:'iniciar-sesion',component:IniciarSesionComponent},
{path:'',redirectTo:'iniciar-sesion',pathMatch:'full'},

//Component-less route
{path:'',children:[

  {path:'',outlet:'navbar',component:NavbarComponent,canActivate:[GuardGuard]},
  {path:'portfolio',component:PortfolioComponent, canActivate:[GuardGuard]},
  {path:'Acerca-de',component:AcercaDeComponent,canActivate:[GuardGuard]},
  {path:'Educacion',component:EducacionComponent,canActivate:[GuardGuard]},
  {path:'Experiencia',component:ExperienciaComponent,canActivate:[GuardGuard]},
  {path:'Skills',component:HardComponent,canActivate:[GuardGuard]},
  {path:'Proyectos',component:ProyectoComponent,canActivate:[GuardGuard]},

]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


