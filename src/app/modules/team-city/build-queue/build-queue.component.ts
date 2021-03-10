import { Component, OnInit } from '@angular/core';
import { TeamCityApiService } from "../../../../core/services/team-city.api.service";

@Component({
  selector: 'app-build-queue',
  templateUrl: './build-queue.component.html' 
})
export class BuildQueueComponent implements OnInit {
  buildQueue: any;

  constructor(private service: TeamCityApiService) {
  }

  ngOnInit(): void {
    this.service.getBuildQueue().subscribe((data: any) => {
      this.buildQueue = data.builds;
    });
  }
}
