import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { DeploymentListActionsComponent } from "../deployment-list-actions/deployment-list-actions.component";
import { BaseGrid } from "../../../../../core/base.grid";
import { OctopusDeployApiService } from "../../../../../core/services/octopus-deploy.api.service";
import { HyperlinkCellRendererComponent } from
  "../../../shared/grids/cell-renderers/hyperlink-cell-renderer/hyperlink-cell-renderer.component";

@Component({
  selector: 'app-deployment-list',
  templateUrl: './deployment-list.component.html'
})
export class DeploymentListComponent extends BaseGrid {
  isLoading: boolean;
  noDeployments: boolean;

  constructor(private readonly service: OctopusDeployApiService,
    datePipe: DatePipe) {
    super(datePipe);
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
        //cellRendererFramework: IconCellRendererComponent
      },
      {
        field: 'Changes',
        cellRenderer: params => {
          return params.value.length;
        }
      },
      {
        headerName: 'Work Items',
        valueGetter: this.workItemsValueGetter,
      },
      {
        headerName: 'Build Number',
        cellRendererFramework: HyperlinkCellRendererComponent
      },
      {
        type: 'buttonColumn',
        cellRendererFramework: DeploymentListActionsComponent
      }
    ];
  }

  workItemsValueGetter(params) {
    let count = 0;
    const changes = params.data.Changes;

    if (changes.length > 0) {
      for (let i = 0; i < changes.length; i++) {
        count += changes[i].WorkItems.length;
      }
    }

    return count;
  }

  //buildNumberValueGetter(params) {
  //  let buildNumber = '';
  //  let buildUrl = '';
  //  const changes = params.data.Changes;

  //  if (changes.length > 0) {
  //    for (let i = 0; i < changes.length; i++) {
  //      const buildInfo = changes[i].BuildInformation;

  //      for (let j = 0; j < buildInfo.length; j++) {
  //        buildNumber += buildInfo[j].BuildNumber;
  //        buildUrl += buildInfo[j].BuildUrl;
  //      }
  //    }
  //  }

  //  return buildNumber === '' ? '' : '<a href="' + buildUrl + '">#' + buildNumber + '</a>';
  //}

  //commitsValueGetter(params) {
  //  let buildNumber = '';
  //  const changes = params.data.Changes;

  //  if (changes.length > 0) {
  //    for (let i = 0; i < changes.length; i++) {
  //      console.log(changes[i].BuildInformation);

  //      for (let j = 0; j < changes[i].BuildInformation.length; j++) {
  //        buildNumber += changes[i].BuildInformation[j].BuildNumber;
  //      }
  //    }
  //  }

  //  return buildNumber === '' ? '' : '#' + buildNumber;
  //}

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
