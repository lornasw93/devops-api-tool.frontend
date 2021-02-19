import { Component, OnInit } from '@angular/core';
import { BuildService } from "../../../../core/services/team-city/build.api.service";

@Component({
  selector: 'app-teamcity',
  templateUrl: './team-city.component.html',
  styleUrls: ['./team-city.component.less']
})
export class TeamCityComponent implements OnInit {
  buildQueue: any;

  constructor(private service: BuildService) { 
  }
  
  ngOnInit(): void {
    this.service.getBuildQueue().subscribe((data: any) => {
      this.buildQueue = data.builds; 
    });
  }
}
