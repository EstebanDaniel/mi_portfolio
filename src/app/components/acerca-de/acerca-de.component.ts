import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/Models/intefazPersona';

import { AboutService } from 'src/app/services/about.service';


@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {

  public persona: Persona | undefined;
  public editPersona: Persona | undefined;

  constructor(private dataAbout: AboutService) {

   }

    ngOnInit():void {
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
    
  }

  

  


