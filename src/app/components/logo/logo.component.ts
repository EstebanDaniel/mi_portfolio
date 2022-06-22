import { Component, OnInit } from '@angular/core';
import { LogoService } from 'src/app/services/logo.service';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.css']
})
export class LogoComponent implements OnInit {

  constructor(private logodata: LogoService) { }

  ngOnInit(): void {
  }

}
