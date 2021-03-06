import { Component, OnInit } from '@angular/core';
import { OctopusDeployService } from "../../../../core/services/octopus-deploy.api.service";

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html'
})
export class TeamsComponent implements OnInit {
  teams: any;

  constructor(private service: OctopusDeployService) { }

  ngOnInit(): void {
    this.service.getTeams().subscribe((data: any[]) => {
      this.teams = data;

      console.log(data);
    });
  }
}
