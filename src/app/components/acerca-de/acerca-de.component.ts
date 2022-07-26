import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Persona } from 'src/app/Models/intefazPersona';

import { AboutService } from 'src/app/services/about.service';
import { LoaderService } from 'src/app/services/loader.service';


@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {

  public persona: Persona | undefined;
  public editarPersona: Persona | undefined;
  public isLoading!: boolean;

  constructor(private dataAbout: AboutService, public loaderService: LoaderService) {

    this.isLoading = true;

   }

    ngOnInit():void {

      setTimeout(() => {
    this.isLoading = false;
      },5000);

      this.getUser();
    }
    
    public getUser():void {
      this.dataAbout.getUser().subscribe ({
        next: (response:Persona)=> 
        {this.persona=response;
        },
      error:(error:HttpErrorResponse)=>{
        alert(error.message);
        
      }
      
    });
    

    }
    
  

  public onOpenModal(mode: String, persona?: Persona):void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display ='none';
    button.setAttribute('data-toggle','modal');
    
    if (mode === 'edit'){  
      this.editarPersona = persona;
      button.setAttribute('data-target','#editPersonaModal')
    }
    container?.appendChild(button);
    button.click();
    }

  

    public onAddPersona(addForm: NgForm):void {
      document.getElementById('add-Persona-form')?.click();
      this.dataAbout.updatePersona(addForm.value).subscribe({
    next: (response:Persona) => {
    console.log(response);
    this.getUser();
    addForm.reset();
    },
    error:(error:HttpErrorResponse)=>{
    alert(error.message);
    addForm.reset();
    }
    
    
      });
    
    }



    
    public onUpdatePersona(persona:Persona):void {
      this.editarPersona = persona;
      document.getElementById('add-Persona-form')?.click();
      this.dataAbout.updatePersona(persona).subscribe({
    next: (response:Persona) => {
    console.log(response);
    this.getUser();
    
    },
    error:(error:HttpErrorResponse)=>{
    alert(error.message);
    
    }
    
    
      });
    
    }
  

}


