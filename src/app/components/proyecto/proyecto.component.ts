import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Proyectos } from 'src/app/Models/InterfazProyectos';
import { IsLoggedService } from 'src/app/services/is-logged.service';
import { LoaderService } from 'src/app/services/loader.service';
import { ProyectService } from 'src/app/services/proyect.service';

@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.css']
})
export class ProyectoComponent implements OnInit {

  public proyectos: Proyectos[]=[]
  public editarProyectos: Proyectos | undefined;
  public borrarProyectos: Proyectos | undefined;
  public isLoading!: boolean;

  constructor(private dataProyect: ProyectService,public loaderService:LoaderService,private isLogged:IsLoggedService) {
  
   this.isLoading = true;

   }

  ngOnInit(): void {

    setTimeout(() =>{
      this.isLoading = false;
    },5000);

    this.getMisProyectos();

  }

  public getMisProyectos():void{

    this.dataProyect.getProyectos().subscribe({
    next:(response:Proyectos[])=>{
    this.proyectos=response;
    },
    error:(error:HttpErrorResponse)=>{
      alert(error.message);
    }
    })
    
    }

    public onOpenModal(mode: String, proyectos?: Proyectos):void {
      const container = document.getElementById('main-container');
      const button =document.createElement('button');
      button.type = 'button';
      button.style.display ='none';
      button.setAttribute('data-toggle','modal');
      if (mode ==='add'){
        button.setAttribute('data-target', '#addProyectosModal')
      } 
      else if (mode==='delete'){
        this.borrarProyectos = proyectos;
        button.setAttribute('data-target','#deleteProyectosModal')
      }
       else if (mode === 'edit'){  
        this.editarProyectos = proyectos;
        button.setAttribute('data-target','#editProyectosModal')
      }
      container?.appendChild(button);
      button.click();
      }
      
      public onAddProyectos(addForm: NgForm):void {
        
        document.getElementById('add-Proyectos-form')?.click();
        this.dataProyect.addProyectos(addForm.value).subscribe({
      next: (response:Proyectos) => {
      console.log(response);
      this.getMisProyectos();
      addForm.reset();
      },
      error:(error:HttpErrorResponse)=>{
      alert(error.message);
      addForm.reset();
      }
      
      
        });
      
      }
      
      public onUpdateProyectos(proyectos:Proyectos){
        this.editarProyectos = proyectos;
        document.getElementById('add-Proyectos-form')?.click();
        this.dataProyect.updateProyectos(proyectos).subscribe({
      next:(response:Proyectos) => {
      console.log(response);
      this.getMisProyectos();
      },
      error:(error:HttpErrorResponse)=>{
        alert(error.message);
      }
        });
      
      }
      
      public onDeleteProyectos(idPro:number):void {
        
        this.dataProyect.deleteProyectos(idPro).subscribe({
      next:(response:void) => {
      console.log(response);
      this.getMisProyectos();
      },
      error:(error:HttpErrorResponse)=>{
        alert(error.message);
      }
        });
      
      }

      isLoginIn():boolean{

        return this.isLogged.isLogin();
        
        }

}
