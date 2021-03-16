import { Component, OnInit } from '@angular/core';
import { faCheck, faSync, faExclamation, faTimes, faEye } from '@fortawesome/free-solid-svg-icons';
import { TeamCityApiService } from "../../../core/services/team-city.api.service";
import { OctopusDeployApiService } from "../../../core/services/octopus-deploy.api.service";

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

  latest10Builds: any;

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

  constructor(private teamCityService: TeamCityApiService,
    private octopusDeployService: OctopusDeployApiService) { }

  ngOnInit(): void { 
    this.teamCityService.getLatest10Builds().subscribe((data: any) => {
      this.latest10Builds = data.build;

      console.log(this.latest10Builds)
    }); 
  }
}
