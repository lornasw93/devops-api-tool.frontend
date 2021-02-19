import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router/router";
import { ProjectService } from "../../../../core/services/team-city/project.api.service";

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.less']
})
export class ProjectComponent implements OnInit {
  id: number;
  project: any;

  constructor(private activatedRoute: ActivatedRoute,
    private service: ProjectService) {
    this.id = this.activatedRoute.snapshot.params.id;
  }

  ngOnInit(): void {
    this.service.getProject(this.id).subscribe((data: any) => {
      this.project = data.project; 
    });
  }
}
