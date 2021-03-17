import { Component, OnInit } from '@angular/core';
import { OctopusDeployApiService } from "../../../../core/services/octopus-deploy.api.service";

@Component({
  selector: 'app-deployments',
  templateUrl: './deployments.component.html'
})
export class DeploymentsComponent implements OnInit {
 // rowData: any[]; 
  count: number;
  //deployedBy: any;

  //view: any[] = [900, 400];

  //labels=true;
  //explodeSlices = false;
  //doughnut = false;
  //legendTitle = 'Deployed by';

  //colorScheme = {
  //  domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  //};

  constructor(private readonly service: OctopusDeployApiService) { }

  ngOnInit(): void {
    this.service.getDeployments().subscribe((data: any) => { 
      this.count = data.TotalResults; 
    }); 
  } 
}
