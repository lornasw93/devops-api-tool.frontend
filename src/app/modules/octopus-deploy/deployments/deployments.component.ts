import { Component, OnInit } from '@angular/core';
import { faUser, faCalendar } from '@fortawesome/free-solid-svg-icons';
import { OctopusDeployService } from "../../../../core/services/octopus-deploy.api.service";

@Component({
  selector: 'app-deployments',
  templateUrl: './deployments.component.html'
})
export class DeploymentsComponent implements OnInit {
  deployments: any;

  columnDefs = [
    { headerName: 'Make', field: 'make' },
    { headerName: 'Model', field: 'model' },
    { headerName: 'Price', field: 'price' }
  ];

  rowData = [
    { make: 'Toyota', model: 'Celica', price: 35000 },
    { make: 'Ford', model: 'Mondeo', price: 32000 },
    { make: 'Porsche', model: 'Boxter', price: 72000 }
  ];

  constructor(private service: OctopusDeployService) { }

  ngOnInit(): void {
    this.service.getDeployments().subscribe((data: any[]) => {
      this.deployments = data;

      console.log(data);
    });
  }
}
