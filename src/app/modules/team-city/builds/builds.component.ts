import { Component, OnInit } from '@angular/core';
import { TeamCityApiService } from "../../../../core/services/team-city.api.service";

@Component({
  selector: 'app-builds',
  templateUrl: './builds.component.html' 
})
export class BuildsComponent implements OnInit {

  builds: any[];


  constructor(private service: TeamCityApiService) { }

  ngOnInit(): void { 
    //this.service.getLatest10Builds().subscribe((data: any) => {
    //  this.builds = data;
    //});
  }
}
