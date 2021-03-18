import { Location, DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OctopusDeployApiService } from "../../../../core/services/octopus-deploy.api.service";

@Component({
  selector: 'app-deployments',
  templateUrl: './deployments.component.html'
})
export class DeploymentsComponent implements OnInit {
  deployedByPieChartDataCount: number;
  deployedByLineChartDataCount: number;
  deployedByPieChartData: any;
  createdLineChartData: any[];

  view: any[] = [900, 400];

  legendTitle = 'Deployed by';

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  // line
  legend = true;
  showLabels = true;
  animations = true;
  xAxis = true;
  yAxis = true;
  showYAxisLabel = true;
  showXAxisLabel = true;
  xAxisLabel = 'Created';
  yAxisLabel = 'Count';
  timeline = true;

  constructor(private activatedRoute: ActivatedRoute,
    private location: Location,
    private readonly service: OctopusDeployApiService,
    private readonly datePipe: DatePipe) { }

  ngOnInit(): void {
    this.service.getDeployments30().subscribe((data: any) => {
      this.deployedByPieChartDataCount = data.Items.length;
      this.deployedByPieChartData = this.buildPieChartData(data.Items, 'DeployedBy');
    });

    this.service.getDeploymentsAll().subscribe((data: any) => {
      this.deployedByLineChartDataCount = data.Items.length;
      this.createdLineChartData = [{ 'name': 'Created', 'series': this.buildLineChartData(data.Items, 'Created') }]; 
    });
  }

  buildPieChartData(records, field) {
    const groupBy = (array, key) => {
      return array.reduce((result, currentValue) => {
        (result[currentValue[key]] = result[currentValue[key]] || []).push(currentValue);
        return result;
      }, {});
    };

    const source = groupBy(records, field);

    var groupedData = [];

    for (let prop in source) {
      if (Object.prototype.hasOwnProperty.call(source, prop)) {
        groupedData.push({ "name": prop, "value": source[prop].length });
      }
    }

    return groupedData;
  }

  buildLineChartData(records, field) {
    const groupBy = (array, key) => {
      return array.reduce((result, currentValue) => {
        (result[currentValue[key]] = result[currentValue[key]] || []).push(currentValue);
        return result;
      }, {});
    };

    const source = groupBy(records, field);
    var groupedData = [];

    for (let prop in source) {
      if (Object.prototype.hasOwnProperty.call(source, prop)) {
        groupedData.push({ "name": this.datePipe.transform(prop, 'MMM yy'), "value": source[prop].length });
      }
    }

    const newSource = groupBy(groupedData, 'name');
    var newGroupedData = [];

    for (let prop in newSource) {
      if (Object.prototype.hasOwnProperty.call(newSource, prop)) {
        newGroupedData.push({ "name": prop, "value": newSource[prop].length });
      }
    }

    return newGroupedData;
  }

  goBack() {
    this.location.back();
  }
}
