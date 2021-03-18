import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { BaseGrid } from "../../../../core/base.grid";
import { OctopusDeployApiService } from "../../../../core/services/octopus-deploy.api.service";
import { IconCellRendererComponent } from "../../shared/components/icon-cell-renderer/icon-cell-renderer.component";
import { DeploymentListActionsComponent } from "../deployment-list-actions/deployment-list-actions.component";

@Component({
  selector: 'app-deployment-list',
  templateUrl: './deployment-list.component.html'
})
export class DeploymentListComponent extends BaseGrid {
  isLoading: boolean;
  noDeployments: boolean;
  
  constructor(service: OctopusDeployApiService,
    datePipe: DatePipe) {
    super(service, datePipe);
  }

  protected getColumnHeaders() {
    return [
      { type: 'idColumn' },
      //{ field: 'ProjectId', hide: true },
      //{ field: 'DeployedById', hide: true },
      //{ field: 'ReleaseId', hide: true },
      { field: 'Name' },
      { field: 'Created', headerName: 'Created', type: 'dateColumn' },
      {
        field: 'DeployedBy', 
        cellRendererFramework: IconCellRendererComponent 
      },
      {
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
        cellRendererFramework: DeploymentListActionsComponent
      }
    ];
  }

  protected getRowData(): void {
    this.isLoading = true;
    this.service.getDeploymentsAll().subscribe((data: any) => {
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
}
