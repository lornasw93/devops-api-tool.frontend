import { Component, OnInit } from '@angular/core';
import { OctopusDeployApiService } from "../../../../core/services/octopus-deploy.api.service";

@Component({
  selector: 'app-deployments',
  templateUrl: './deployments.component.html'
})
export class DeploymentsComponent implements OnInit {
  deployments: any[];
  deploymentsCount: number;

  gridApi;
  gridColumnApi;
  columnDefs;
  defaultColDef;

  constructor(private service: OctopusDeployApiService) { }

  ngOnInit(): void {
    this.service.getDeployments().subscribe((data: any) => {
      this.deployments = data.Items;
      this.deploymentsCount = data.TotalResults;

      console.log(data);
    });

    this.columnDefs = [
      { field: 'Id', hide: true },
      { field: 'ProjectId', hide: true },
      { field: 'DeployedById', hide: true },
      { field: 'ReleaseId', hide: true },
      { field: 'Name' },
      { field: 'FailureEncountered' },
      { field: 'Created' },
      { field: 'DeployedBy' },
      { field: 'Created' },
    ];

    this.defaultColDef = {
      sortable: true,
      resizable: true,
      filter: false,
      autoHeight: true,
      rowSelection: 'single',
    };
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;

    params.columnApi.autoSizeAllColumns();
  }
}
