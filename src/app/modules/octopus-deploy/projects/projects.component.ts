import { Component, OnInit } from '@angular/core';
import { OctopusDeployApiService } from "../../../../core/services/octopus-deploy.api.service";
import { StatusCellRendererComponent } from "../../shared/grids/cell-renderers/status-cell-renderer/status-cell-renderer.component";
import { ProjectListActionsComponent } from "../../shared/project-list-actions/project-list-actions.component";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html'
})
export class ProjectsComponent implements OnInit {
  projects: any;
  projectsCount: number;

  gridApi;
  gridColumnApi;
  columnDefs;
  defaultColDef;
  frameworkComponents;

  constructor(private service: OctopusDeployApiService) { }

  ngOnInit(): void {
    this.service.getProjects().subscribe((data: any) => {
      this.projectsCount = data.TotalResults;
      this.projects = data.Items.sort((a, b) => a.Name.localeCompare(b.Name)); 
    });

    this.frameworkComponents = {
      statusCellRenderer: StatusCellRendererComponent
    };

    this.columnDefs = [
      { field: 'Id', hide: true },
      {
        headerName: 'Name',
        field: 'Name',
        //cellRenderer(params) {
        //  return `<a href="http://localhost:420cascadeengineering.octopus.app${params.data.Links.Web}" target="_blank" rel="noopener">${params.value}</a>`;
        //}
      },
      { headerName: 'Description', field: 'Description', width: 175 },
      {
        headerName: 'Auto Create Release',
        field: 'AutoCreateRelease',
        width: 160,
        cellRendererFramework: StatusCellRendererComponent
      },
      {
        headerName: '',
        field: 'Id',
        resizable: false,
        colId: 'buttons',
        suppressSizeToFit: true,
        cellClass: ['ag-cell-actions'],
        cellRendererFramework: ProjectListActionsComponent,
      }
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
