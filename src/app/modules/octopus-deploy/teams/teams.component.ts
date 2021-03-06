import { Component, OnInit } from '@angular/core';
import { TeamService } from "../../../../core/services/octopus-deploy/team.api.service";

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html'
})
export class TeamsComponent implements OnInit {
  teams: any;

  constructor(private service: TeamService) { }

  ngOnInit(): void {
    this.service.getTeams().subscribe((data: any[]) => {
      this.teams = data;

      console.log(data);
    });
  }
}
