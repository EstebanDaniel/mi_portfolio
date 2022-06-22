import { Component, OnInit } from '@angular/core';
import { HardskillsService } from 'src/app/services/hardskills.service';

@Component({
  selector: 'app-hard',
  templateUrl: './hard.component.html',
  styleUrls: ['./hard.component.css']
})
export class HardComponent implements OnInit {

  constructor(private hardData: HardskillsService) { }

  ngOnInit(): void {
  }

}
