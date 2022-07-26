import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Experiencia } from 'src/app/Models/interfazExperiencia';
import { ExperienceService } from 'src/app/services/experience.service';
import { LoaderService } from 'src/app/services/loader.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {

  public experiencias: Experiencia[]=[]
  public editarExperiencia: Experiencia | undefined;
  public borrarExperiencia: Experiencia | undefined;
  public isLoading!: boolean;  


  constructor(private dataExp: ExperienceService,public loaderService:LoaderService) {
  this.isLoading=true;

   }

  ngOnInit(): void {

    setTimeout(() => {
     this.isLoading = false;
    },5000)

   this.getExperiencias();

  }

  public getExperiencias():void{

    this.dataExp.getExperiencia().subscribe({
    next:(response:Experiencia[])=>{
    this.experiencias=response;
    },
    error:(error:HttpErrorResponse)=>{
      alert(error.message);
    }
    })
    
    }

    public onOpenModal(mode: String, experiencia?: Experiencia):void {
      const container = document.getElementById('main-container');
      const button =document.createElement('button');
      button.type = 'button';
      button.style.display ='none';
      button.setAttribute('data-toggle','modal');
      if (mode ==='add'){
        button.setAttribute('data-target', '#addExperienciaModal')
      } 
      else if (mode==='delete'){
        this.borrarExperiencia = experiencia;
        button.setAttribute('data-target','#deleteExperienciaModal')
      }
       else if (mode === 'edit'){  
        this.editarExperiencia = experiencia;
        button.setAttribute('data-target','#editExperienciaModal')
      }
      container?.appendChild(button);
      button.click();
      }
      
      public onAddExperiencia(addForm: NgForm):void {
        
        document.getElementById('add-Experiencia-form')?.click();
        this.dataExp.addExperiencia(addForm.value).subscribe({
      next: (response:Experiencia) => {
      console.log(response);
      this.getExperiencias();
      addForm.reset();
      },
      error:(error:HttpErrorResponse)=>{
      alert(error.message);
      addForm.reset();
      }
      
      
        });
      
      }
      
      public onUpdateExperiencia(experiencia:Experiencia){
        this.editarExperiencia = experiencia;
        document.getElementById('add-Experiencia-form')?.click();
        this.dataExp.updateExperiencia(experiencia).subscribe({
      next:(response:Experiencia) => {
      console.log(response);
      this.getExperiencias();
      },
      error:(error:HttpErrorResponse)=>{
        alert(error.message);
      }
        });
      
      }
      
      public onDeleteExperiencia(idExp:number):void {
        
        this.dataExp.deleteExperiencia(idExp).subscribe({
      next:(response:void) => {
      console.log(response);
      this.getExperiencias();
      },
      error:(error:HttpErrorResponse)=>{
        alert(error.message);
      }
        });
      
      }
      
}
