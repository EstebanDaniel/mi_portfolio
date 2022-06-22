import { Component, OnInit } from '@angular/core';
import { ExperienceService } from 'src/app/services/experience.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {

  constructor(private dataExp: ExperienceService) { }

  ngOnInit(): void {
  }

}
