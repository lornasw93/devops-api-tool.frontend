import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { OctopusDeployApiService } from "../../../../core/services/octopus-deploy.api.service";

@Component({
  selector: 'app-deployments',
  templateUrl: './deployments.component.html'
})
export class DeploymentsComponent implements OnInit {
  rowData: any[];
  totalCount: number;
  count: number;
  deployedBy: any;

  view: any[] = [900, 400];

  gridApi;
  gridColumnApi;
  columnDefs;
  defaultColDef;

  showLabels = true;
  explodeSlices = false;
  doughnut = false;
  legendTitle = 'Deployed by';

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  constructor(private service: OctopusDeployApiService,
    private datePipe: DatePipe) { }

  ngOnInit(): void {
    this.service.getDeployments().subscribe((data: any) => {
      this.rowData = data.Items;
      this.totalCount = data.TotalResults;
      this.count = data.Items.length;

      this.deployedBy = this.getChartData(data.Items, 'DeployedBy');

      console.log(data.Items);
    });

    this.columnDefs = [
      { field: 'Id', hide: true },
      { field: 'ProjectId', hide: true },
      { field: 'DeployedById', hide: true },
      { field: 'ReleaseId', hide: true },
      { field: 'Name' },
      {
        headerName: 'Created', field: 'Created',
        cellRenderer: (data) => {
          return data.value ? this.datePipe.transform(data.value, 'dd/MM/yy HH:mm') : data.value;
        }
      },
      { field: 'DeployedBy' }
    ];

    this.defaultColDef = {
      sortable: true,
      resizable: true,
      filter: false,
      autoHeight: true,
      rowSelection: 'single'
    };
  }

  getChartData(records, field) {
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

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;

    params.columnApi.autoSizeAllColumns();
  }
}
