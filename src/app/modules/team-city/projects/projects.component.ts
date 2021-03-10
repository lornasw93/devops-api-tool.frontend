import { Component, OnInit } from '@angular/core';
import { TeamCityApiService } from "../../../../core/services/team-city.api.service";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html'
})
export class ProjectsComponent implements OnInit {
  projects: any;
  data: any;

  newProjects: any[];

  constructor(private service: TeamCityApiService) {
  }

  ngOnInit(): void {
    this.service.getProjects().subscribe((data: any) => {
        this.projects = data.projects;
      });

    //this.service.getProjectsBuildTypes()
    //  //.pipe(
    //  //  groupBy(p => p.id),
    //  //)
    //  .subscribe((data: any) => {
    //    this.data = data.buildType;

    //    console.log(this.data);
    //  });
  }
}
