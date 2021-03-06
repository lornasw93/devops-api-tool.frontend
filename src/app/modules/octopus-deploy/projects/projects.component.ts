import { Component, OnInit } from '@angular/core';
import { OctopusDeployService } from "../../../../core/services/octopus-deploy.api.service";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html' 
})
export class ProjectsComponent implements OnInit {
  projects: any;

  constructor(private service: OctopusDeployService) { }

  ngOnInit(): void {
    this.service.getProjects().subscribe((data: any[]) => {
      this.projects = data;

      console.log(data);
    });
  }


  columnDefs = [
    { field: 'make' },
    { field: 'model' },
    { field: 'price' }
  ];

  rowData = [
    { make: 'Toyota', model: 'Celica', price: 35000 },
    { make: 'Ford', model: 'Mondeo', price: 32000 },
    { make: 'Porsche', model: 'Boxter', price: 72000 }
  ];
}
