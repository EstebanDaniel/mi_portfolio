import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { AcercaDeComponent } from '../components/acerca-de/acerca-de.component';
import { BannerComponent } from '../components/banner/banner.component';
import { EducacionComponent } from '../components/educacion/educacion.component';
import { ExperienciaComponent } from '../components/experiencia/experiencia.component';
import { FooterComponent } from '../components/footer/footer.component';
import { HeaderComponent } from '../components/header/header.component';

import { IniciarSesionComponent } from '../components/iniciar-sesion/iniciar-sesion.component';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { NotFoundComponent } from '../components/not-found/not-found.component';
import { PortfolioComponent } from '../components/portfolio/portfolio.component';
import { ProyectoComponent } from '../components/proyecto/proyecto.component';
import { SkillsComponent } from '../components/skills/skills.component';
import { GuardGuard } from '../services/guard.guard';

const routes: Routes = [

  {path:'iniciar-sesion',component:IniciarSesionComponent},
{path:'',redirectTo:'iniciar-sesion',pathMatch:'full'},


//Component-less route
{path:'',children:[

  {path:'',outlet:'navbar',component:NavbarComponent,canActivate:[GuardGuard]},
  {path:'portfolio',component:PortfolioComponent, canActivate:[GuardGuard]},
  {path:'AcercaDe',component:AcercaDeComponent,canActivate:[GuardGuard]},
  {path:'Educacion',component:EducacionComponent,canActivate:[GuardGuard]},
  {path:'Experiencia',component:ExperienciaComponent,canActivate:[GuardGuard]},
  {path:'Skills',component:SkillsComponent,canActivate:[GuardGuard]},
  {path:'Proyectos',component:ProyectoComponent,canActivate:[GuardGuard]},
  {path:'**',component:NotFoundComponent},
]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


