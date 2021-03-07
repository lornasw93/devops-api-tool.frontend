import { Component, OnInit } from '@angular/core';
import { OctopusDeployService } from "../../../../core/services/octopus-deploy.api.service";

@Component({
  selector: 'app-environments',
  templateUrl: './environments.component.html' 
})
export class EnvironmentsComponent implements OnInit {
  environments: any;

  constructor(private service: OctopusDeployService) { }

  ngOnInit(): void {
    this.service.getEnvironments().subscribe((data: any[]) => {
      this.environments = data;

      console.log(data);
    });
  }
}
