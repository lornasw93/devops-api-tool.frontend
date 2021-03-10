import { Component, OnInit } from '@angular/core';
import { OctopusDeployApiService } from "../../../../core/services/octopus-deploy.api.service";

@Component({
  selector: 'app-releases',
  templateUrl: './releases.component.html'
})
export class ReleasesComponent implements OnInit {
  releases: any;

  constructor(private service: OctopusDeployApiService) { }

  ngOnInit(): void {
    this.service.getReleases().subscribe((data: any[]) => {
      this.releases = data;

      console.log(data);
    });
  }
}
