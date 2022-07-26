import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Educacion } from 'src/app/Models/interfazEducacion';
import { EducationService } from 'src/app/services/education.service';
import { Location } from '@angular/common';
import { LoaderService } from 'src/app/services/loader.service';


@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  
  public educaciones: Educacion[]=[]
  public editarEducacion: Educacion | undefined;
  public borrarEducacion: Educacion | undefined;
  public isLoading!: boolean;
  
  constructor(private dataEdu: EducationService,private location:Location, public loaderService:LoaderService) {

    this.isLoading=true

  }
   
  ngOnInit(): void {

    setTimeout(() => {
      this.isLoading=false;
    },5000)
    
    this.getEducaciones();
  
  }

  public getEducaciones():void{

this.dataEdu.getEduacion().subscribe({
next:(response:Educacion[])=>{
this.educaciones=response;
},
error:(error:HttpErrorResponse)=>{
  alert(error.message);
}
})

}

public onOpenModal(mode: String, educacion?: Educacion):void {
const container = document.getElementById('main-container');
const button =document.createElement('button');
button.type = 'button';
button.style.display ='none';
button.setAttribute('data-toggle','modal');
if (mode ==='add'){
  button.setAttribute('data-target', '#addEducacionModal')
} 
else if (mode==='delete'){
  this.borrarEducacion = educacion;
  button.setAttribute('data-target','#deleteEducacionModal')
}
 else if (mode === 'edit'){  
  this.editarEducacion = educacion;
  button.setAttribute('data-target','#editEducacionModal')
}
container?.appendChild(button);
button.click();
}

public onAddEducacion(addForm: NgForm):void {
  
  document.getElementById('add-Educacion-form')?.click();
  this.dataEdu.addEducacion(addForm.value).subscribe({
next: (response:Educacion) => {
console.log(response);
this.getEducaciones();
addForm.reset();
},
error:(error:HttpErrorResponse)=>{
alert(error.message);
addForm.reset();
}


  });

}

public onUpdateEducacion(educacion:Educacion){
  this.editarEducacion = educacion;
  document.getElementById('add-Educacion-form')?.click();
  this.dataEdu.updateEducacion(educacion).subscribe({
next:(response:Educacion) => {
console.log(response);
this.getEducaciones();
},
error:(error:HttpErrorResponse)=>{
  alert(error.message);
}
  });

}

public onDeleteEducacion(idEdu:number):void {
  
  this.dataEdu.deleteEducacion(idEdu).subscribe({
next:(response:void) => {
console.log(response);
this.getEducaciones();
},
error:(error:HttpErrorResponse)=>{
  alert(error.message);
}
  });

}


/*goBack(): void {
  this.location.back();
}*/


}
