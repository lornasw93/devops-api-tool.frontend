import { Component, OnInit } from '@angular/core';
import { faCheck, faSync, faExclamation, faTimes, faEye } from '@fortawesome/free-solid-svg-icons';
import { BuildService } from "../../../core/services/team-city/build.api.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  faCheck = faCheck;
  faSync = faSync;
  faExclamation = faExclamation;
  faTimes = faTimes;
  faEye = faEye;
   
  constructor(private service: BuildService) {
  }

  ngOnInit(): void {




  } 
}
