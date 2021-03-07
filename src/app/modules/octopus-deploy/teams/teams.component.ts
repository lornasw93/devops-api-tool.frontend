import { Component, OnInit } from '@angular/core';
import { faEnvelope, faShare } from '@fortawesome/free-solid-svg-icons';
import { OctopusDeployService } from "../../../../core/services/octopus-deploy.api.service";

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html'
})
export class TeamsComponent implements OnInit {
  faShare = faShare;
  faEnvelope = faEnvelope;

  teams: any;

  constructor(private service: OctopusDeployService) { }

  ngOnInit(): void {
    this.service.getTeams().subscribe((data: any[]) => {
      this.teams = data;

      console.log(data);
    });
  }
}
