import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OctopusDeployApiService } from "../../../../core/services/octopus-deploy.api.service";

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html'
})
export class ProjectComponent implements OnInit {
  id: number;
  project: any;

  constructor(private activatedRoute: ActivatedRoute,
    private service: OctopusDeployApiService) {
    this.id = this.activatedRoute.snapshot.params.id;
  }
   
  ngOnInit(): void {
    this.service.getProject(this.id).subscribe((data: any) => {
      this.project = data;

      console.log(data);
    });
  }
}
