import { Component, OnInit } from '@angular/core';
import { ProyectService } from 'src/app/services/proyect.service';

@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.css']
})
export class ProyectoComponent implements OnInit {

  constructor(private dataProyect: ProyectService) { }

  ngOnInit(): void {
  }

}
