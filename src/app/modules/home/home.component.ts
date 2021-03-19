import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  view: any[] = [700, 400];
  single = [
    {
      "name": "Builds",
      "value": 6000
    },
    {
      "name": "Deployments",
      "value": 1136
    },
    {
      "name": "Pull Requests",
      "value": 720
    },
    {
      "name": "Tests",
      "value": 12000
    },
    {
      "name": "Releases",
      "value": 1329
    } 
  ];
  gradient: boolean = false;
  animations: boolean = true;

  //faCheck = faCheck;
  //faSync = faSync;
  //faExclamation = faExclamation;
  //faTimes = faTimes;
  //faEye = faEye;

  //latest10Builds: any;

  //builds = [
  //  { "name": "Success", "value": 18 },
  //  { "name": "Fail", "value": 3 },
  //  { "name": "Cancel", "value": 2 }
  //];

  //pullRequests = [
  //  { "name": "Open", "value": 6 },
  //  { "name": "Merged", "value": 3 },
  //  { "name": "Closed", "value": 1 }
  //];

  //deployments = [
  //  { "name": "Success", "value": 4 }
  //];

  //scheme = {
  //  domain: ['#198754', '#dc3545', '#6c757d']
  //};

  //constructor(private teamCityService: TeamCityApiService,
  //  private octopusDeployService: OctopusDeployApiService) { }

  ngOnInit(): void {
    //this.teamCityService.getLatest10Builds().subscribe((data: any) => {
    //  this.latest10Builds = data.build;

    //  console.log(this.latest10Builds)
    //}); 
  }

  ngAfterViewInit() {
 
  } 
}
