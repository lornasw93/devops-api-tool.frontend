import { Component, OnInit } from '@angular/core';
import { ProjectService } from "../../../../core/services/team-city/project.api.service";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html' 
})
export class ProjectsComponent implements OnInit {
  projects: any;

  constructor(private service: ProjectService) {
  }

  ngOnInit(): void {
    this.service.getProjects().subscribe((data: any) => {
      this.projects = data.projects; 
    });
  }
}
