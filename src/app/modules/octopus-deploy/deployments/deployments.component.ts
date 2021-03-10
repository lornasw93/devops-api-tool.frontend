import { Component, OnInit } from '@angular/core';
import { faUser, faCalendar } from '@fortawesome/free-solid-svg-icons';
import { OctopusDeployService } from "../../../../core/services/octopus-deploy.api.service";

@Component({
  selector: 'app-deployments',
  templateUrl: './deployments.component.html'
})
export class DeploymentsComponent implements OnInit {
  deployments: any;
  deploymentsCount: number;

  gridApi;
  gridColumnApi;
  columnDefs;
  defaultColDef;

  constructor(private service: OctopusDeployService) { }

  ngOnInit(): void {
    this.service.getDeployments().subscribe((data: any) => {
      this.deployments = data;
      this.deploymentsCount = data.TotalResults;

      console.log(data);
    });

    this.columnDefs = [
      { field: 'Id', hide: true },
     // { headerName: 'Description', field: 'Description', width: 175 },
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
