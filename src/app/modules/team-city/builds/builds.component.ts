import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TeamCityApiService } from "../../../../core/services/team-city.api.service";

@Component({
  selector: 'app-builds',
  templateUrl: './builds.component.html'
})
export class BuildsComponent implements OnInit {
  lineChartDataCount: number;
  lineChartData: any[];
    view: any[] = [450,400];
  // line
  legend = true;
  showLabels = true;
  animations = true;
  xAxis = true;
  yAxis = true;
  showYAxisLabel = true;
  showXAxisLabel = true;
  xAxisLabel = 'Date';
  yAxisLabel = 'Count';
  timeline = true;

  constructor(private readonly service: TeamCityApiService,
    private readonly datePipe: DatePipe) {
  }

  ngOnInit(): void { }

  ngAfterViewInit() {
    this.service.getBuilds20().subscribe((data: any) => {
      this.lineChartDataCount = data.build.take(20).length;
      this.lineChartData = [{ 'name': 'Date', 'series': this.buildLineChartData(data.build.take(20).reverse(), 'finishOnAgentDate') }];
    });
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
}
