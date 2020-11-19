import { Component, OnInit } from '@angular/core';
import { DeploymentsService } from 'src/core/deployments.api.service';

@Component({
  selector: 'app-deployments',
  templateUrl: './deployments.component.html',
  styleUrls: ['./deployments.component.less']
})
export class DeploymentsComponent implements OnInit {
  rowData: any;
  count: number;

  private gridApi;
  private gridColumnApi;

  constructor(private readonly service: DeploymentsService) {
  }

  ngOnInit(): void {
    this.setData();
  }

  setData() {
    this.service.getDeployments().subscribe((data: any) => {
      this.rowData = data.Items;
      this.count = data.TotalResults;
      console.log(data)
    });
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    this.gridApi.sizeColumnsToFit();
  }

  columnDefs = [
    { field: 'Id' },
    { field: 'ReleaseId' },
    { field: 'ChannelId' },
    //{ field: 'DeploymentProcessId' },
    { field: 'Changes' },
    //{ field: 'ChangesMarkdown' },
    { field: 'EnvironmentId' },
    { field: 'TenantId' },
   //{ field: 'ForcePackageDownload' },
   //{ field: 'ForcePackageRedeployment' },
   //{ field: 'SkipActions' },
    //{ field: 'SpecificMachineIds' },
    //{ field: 'ExcludedMachineIds' },
    //{ field: 'ManifestVariableSetId' },
    //{ field: 'TaskId' },
    { field: 'ProjectId' },
    //{ field: 'UseGuidedFailure' },
    { field: 'Comments' },
    //{ field: 'FormValues' },
    { field: 'QueueTime' },
    //{ field: 'QueueTimeExpiry' },
    { field: 'Name' },
    { field: 'Created' },
    //{ field: 'SpaceId' },
    //{ field: 'TentacleRetentionPeriod' },
    { field: 'DeployedBy' },
    { field: 'DeployedId' },
    { field: 'FailureEncountered' },
    //{ field: 'DeployedToMachineIds' },
    //{ field: 'Links' }
  ];

  defaultColDef = {
    sortable: false,
    resizable: true,
    filter: false,
    autoHeight: true,
    rowSelection: 'single'
  };
}
