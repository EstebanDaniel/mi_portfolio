import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AcercaDeComponent } from './components/acerca-de/acerca-de.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { ProyectoComponent } from './components/proyecto/proyecto.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { BannerComponent } from './components/banner/banner.component';
import {HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
//import {EducationService} from './services/education.service';
import { IniciarSesionComponent } from './components/iniciar-sesion/iniciar-sesion.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import {APP_BASE_HREF} from '@angular/common';
import { InterceptorService } from './services/interceptor.service';
import { NavbarComponent } from './components/navbar/navbar.component';
//import { AboutService } from './services/about.service';
import { SkillsComponent } from './components/skills/skills.component';
//import { SkillsService } from './services/skills.service';

import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { NotFoundComponent } from './components/not-found/not-found.component'







@NgModule({
  declarations: [
    AppComponent,
    AcercaDeComponent,
    ExperienciaComponent,
    EducacionComponent,
    ProyectoComponent,
    FooterComponent,
    HeaderComponent,
    BannerComponent,
    IniciarSesionComponent,
    PortfolioComponent,
    NavbarComponent,
    SkillsComponent,
    NotFoundComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule
    
  ],
  providers: [{provide:HTTP_INTERCEPTORS,useClass:InterceptorService, multi: true},[{provide: APP_BASE_HREF, useValue: '/'}]],
  bootstrap: [AppComponent]
})
export class AppModule { }
