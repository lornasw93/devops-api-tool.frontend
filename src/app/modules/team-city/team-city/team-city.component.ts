import { Component, OnInit } from '@angular/core';
import { TeamCityApiService } from "../../../../core/services/team-city.api.service";

@Component({
  selector: 'app-teamcity',
  templateUrl: './team-city.component.html'
})
export class TeamCityComponent implements OnInit {
  buildQueue: any;

  constructor(private service: TeamCityApiService) { 
  }
  
  ngOnInit(): void {
    this.service.getBuildQueue().subscribe((data: any) => {
      this.buildQueue = data.builds; 
    });
  }
}
