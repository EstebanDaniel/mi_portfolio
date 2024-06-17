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



//Component-less route
{path:'',children:[

  {path:'',outlet:'navbar',component:NavbarComponent},
  {path:'portfolio',component:PortfolioComponent},
  {path:'',component:AcercaDeComponent},
  {path:'Educacion',component:EducacionComponent},
  {path:'Experiencia',component:ExperienciaComponent},
  {path:'Skills',component:SkillsComponent},
  {path:'Proyectos',component:ProyectoComponent},
  {path:'**',component:NotFoundComponent},
  {path:'',redirectTo:'AcercaDe',pathMatch:'full'}
]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


