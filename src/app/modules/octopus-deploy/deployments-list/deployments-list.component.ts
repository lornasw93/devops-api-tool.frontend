import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { BaseGrid } from "../../../../core/base.grid";
import { OctopusDeployApiService } from "../../../../core/services/octopus-deploy.api.service";
import { DepartmentListActionsComponent } from "../department-list-actions/department-list-actions.component";

@Component({
  selector: 'app-deployments-list',
  templateUrl: './deployments-list.component.html'
})
export class DeploymentsListComponent extends BaseGrid {
  isLoading: boolean;
  noDeployments: boolean;

  constructor(service: OctopusDeployApiService,
    datePipe: DatePipe) {
    super(service, datePipe);
  }

  a1000ValueGetter(params) {
    return params.data;
  }

  protected getColumnHeaders() {
    return [
      { type: 'idColumn' },
      //{ field: 'ProjectId', hide: true },
      //{ field: 'DeployedById', hide: true },
      //{ field: 'ReleaseId', hide: true },
      { field: 'Name' },
      { field: 'Created', headerName: 'Created', type: 'dateColumn' },
      { field: 'DeployedBy' },
      {
        colId: 'ch',
        field: 'Changes',
        cellRenderer: params => {
          return params.value.length;
        }
      },
      {
        headerName: 'Work Items',
        cellRenderer: params => {
          return params.value;
        }
      },
      {
        type: 'buttonColumn',
        cellRendererFramework: DepartmentListActionsComponent
      }
    ];
  }

  protected getRowData(): void {
    this.isLoading = true;
    this.service.getDeployments().subscribe((data: any) => {
      this.rowData = data.Items;
      this.hasDeployments(); 
    }).add(() => {
      this.isLoading = false;
    });
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

  hasDeployments() {
    this.noDeployments = this.rowData == null || this.rowData.length === 0;
  }

  //this.defaultColDef = {
  //  sortable: true,
  //  resizable: true,
  //  filter: false,
  //  autoHeight: true,
  //  rowSelection: 'single'
  //};
}
