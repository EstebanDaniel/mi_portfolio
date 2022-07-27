import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AutenticacionService } from 'src/app/services/autenticacion.service';
import { LoaderService } from 'src/app/services/loader.service';




@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.css']
})
export class IniciarSesionComponent implements OnInit {

  
  
  form: FormGroup;

  constructor(private formbuilder: FormBuilder, private autenticacionService:AutenticacionService, private ruta:Router,public loaderService:LoaderService) { 
this.form=this.formbuilder.group(
  {
    
    email:['',[Validators.required,Validators.email]],
    password:['',[Validators.required,Validators.maxLength(8)]]
    


  }
)

  }

  ngOnInit(): void {
  }

  get Email ()
  {
  return this.form.get('email')
  }
  
  get Password (){
    return this.form.get('password');
  
  }



  onEnviar (event: Event)
  {
    
 event.preventDefault;
 
  
  this.autenticacionService.IniciarSesion(this.form.value).subscribe(data=>{
   
console.log("DATA:" + JSON.stringify(data));
this.ruta.navigate(['/portfolio'])

})


  }

  
  
}

