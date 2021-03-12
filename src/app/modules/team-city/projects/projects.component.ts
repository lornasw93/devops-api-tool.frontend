import { Component, OnInit } from '@angular/core';
import { TeamCityApiService } from "../../../../core/services/team-city.api.service";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html'
})
export class ProjectsComponent implements OnInit {
  rowData: any;
  count: number;

  gridApi;
  gridColumnApi;

  constructor(private service: TeamCityApiService) {
  }

  ngOnInit(): void {
    this.service.getProjects().subscribe((data: any) => {
      this.rowData = data.projects.project;
      this.count = data.projects.count; 
    }); 
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;

    params.columnApi.autoSizeAllColumns();
  }

  columnDefs = [
    { field: 'id', hide: true },
    { field: 'parentProjectId', hide: true },
    { field: 'name' },
    { field: 'description' },
    { field: 'webUrl' }
  ];

  defaultColDef = {
    sortable: true,
    resizable: true,
    filter: false,
    autoHeight: true,
    rowSelection: 'single',
  }; 
}
