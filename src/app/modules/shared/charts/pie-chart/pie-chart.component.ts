import { OnInit } from '@angular/core';
import { PieChartOptions } from "../../../../../core/models/pie-chart-options.model";

export abstract class PieChartComponent implements OnInit {
  //protected scheme;
  //protected legend;
  //protected showXAxisLabel;
  //protected showYAxisLabel;
  //protected xAxis;
  //protected yAxis;
  //protected xAxisLabel;
  //protected yAxisLabel;
  //protected timeline;

  //protected abstract options: PieChartOptions;

  protected scheme: [{}];
  protected results: any[];
  protected gradient: boolean;
  protected legend: boolean;
  protected legendTitle: string;
  protected explodeSlices: boolean;
  protected labels: boolean;
  protected doughnut: boolean;

  //protected abstract options: any[];

  count: number;

  ngOnInit(): void { }

  // protected abstract getOptions();

  protected buildPieChartData(records, field) {
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
}
