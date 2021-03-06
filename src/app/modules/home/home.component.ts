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

  builds = [
    { "name": "Success", "value": 18 },
    { "name": "Fail", "value": 3 },
    { "name": "Cancel", "value": 2 }
  ];

  pullRequests = [
    { "name": "Open", "value": 6 },
    { "name": "Merged", "value": 3 },
    { "name": "Closed", "value": 1 }
  ];

  deployments = [
    { "name": "Success", "value": 4 }
  ];
   
  scheme = {
    domain: ['#198754', '#dc3545', '#6c757d']
  };

  constructor(private service: BuildService) {
  }

  ngOnInit(): void {
  }
}
