import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Skills } from 'src/app/Models/interfazSkills';
import { LoaderService } from 'src/app/services/loader.service';
import { SkillsService } from 'src/app/services/skills.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  public skills: Skills[]=[]
  public editarSkills: Skills | undefined;
  public borrarSkills: Skills | undefined;

  public isLoading!: boolean;

  constructor(private dataSkills: SkillsService,public loaderService:LoaderService) {

  this.isLoading=true

   }

  ngOnInit(): void {

   setTimeout(() => {
    this.isLoading = false;
   },5000);

    this.getSkills();

  }


  public getSkills():void{

    this.dataSkills.getSkills().subscribe({
    next:(response:Skills[])=>{
    this.skills=response;
    },
    error:(error:HttpErrorResponse)=>{
      alert(error.message);
    }
    })
    
    }


    public onOpenModal(mode: String, skills?: Skills):void {
      const container = document.getElementById('main-container');
      const button =document.createElement('button');
      button.type = 'button';
      button.style.display ='none';
      button.setAttribute('data-toggle','modal');
      if (mode ==='add'){
        button.setAttribute('data-target', '#addSkillsModal')
      } 
      else if (mode==='delete'){
        this.borrarSkills = skills;
        button.setAttribute('data-target','#deleteSkillsModal')
      }
       else if (mode === 'edit'){  
        this.editarSkills = skills;
        button.setAttribute('data-target','#editSkillsModal')
      }
      container?.appendChild(button);
      button.click();
      }
      
      public onAddSkills(addForm: NgForm):void {
        //const num =1
        document.getElementById('add-Skills-form')?.click();
        this.dataSkills.addSkills(addForm.value).subscribe({
      next: (response:Skills) => {
      console.log(response);
      this.getSkills();
      addForm.reset();
      },
      error:(error:HttpErrorResponse)=>{
      alert(error.message);
      addForm.reset();
      }
      
      
        });
      
      }
      
      public onUpdateSkills(skills:Skills){
        this.editarSkills = skills;
        document.getElementById('add-Skills-form')?.click();
        this.dataSkills.updateSkills(skills).subscribe({
      next:(response:Skills) => {
      console.log(response);
      this.getSkills();
      },
      error:(error:HttpErrorResponse)=>{
        alert(error.message);
      }
        });
      
      }
      
      public onDeleteSkills(idSkills:number):void {
        
        this.dataSkills.deleteSkills(idSkills).subscribe({
      next:(response:void) => {
      console.log(response);
      this.getSkills();
      },
      error:(error:HttpErrorResponse)=>{
        alert(error.message);
      }
        });
      
      }


}
