import { Component, OnInit } from '@angular/core';
import { ProjectService } from "../../../../core/services/team-city/project.api.service";
import { groupBy, mapTo } from 'rxjs/operators';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html'
})
export class ProjectsComponent implements OnInit {
  projects: any;
  data: any;

  newProjects: any[];

  constructor(private service: ProjectService) {
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
