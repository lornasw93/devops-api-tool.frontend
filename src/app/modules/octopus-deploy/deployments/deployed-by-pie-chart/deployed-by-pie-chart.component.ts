import { Component, OnInit } from '@angular/core';
import { PieChartComponent } from "../../../shared/charts/pie-chart/pie-chart.component";
import { OctopusDeployApiService } from "../../../../../core/services/octopus-deploy.api.service";
import { PieChartOptions } from '../../../../../core/models/pie-chart-options.model';

@Component({
  selector: 'app-deployed-by-pie-chart',
  templateUrl: './deployed-by-pie-chart.component.html'
})
export class DeployedByPieChartComponent extends PieChartComponent implements OnInit {
    
  constructor(private readonly service: OctopusDeployApiService) {
    super();
  }

  ngOnInit(): void { }

  ngAfterViewInit() { 
    this.service.getDeployments30().subscribe((data: any) => {
      this.count = data.Items.length;
      this.results = this.buildPieChartData(data.Items, 'DeployedBy');
    });
  }
}
