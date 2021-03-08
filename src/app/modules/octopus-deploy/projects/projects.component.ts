import { Component, OnInit } from '@angular/core';
import { OctopusDeployService } from "../../../../core/services/octopus-deploy.api.service";
import { StatusCellRendererComponent } from "../../shared/components/status-cell-renderer/status-cell-renderer.component";

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

  constructor(private service: OctopusDeployService) { }

  ngOnInit(): void {
    this.service.getProjects().subscribe((data: any) => {
      this.projectsCount = data.TotalResults;
      this.projects = data.Items;
    });

    this.frameworkComponents = {
      statusCellRenderer: StatusCellRendererComponent
    };

    this.columnDefs = [
      { field: 'Id', hide: true },
      {
        headerName: 'Name',
        field: 'Name',
        width: 135,
        cellRenderer(params) {
          return `<a href="https://cascadeengineering.octopus.app${params.data.Links.Web}" target="_blank" rel="noopener">${params.value}</a>`;
        }
      },
      { headerName: 'Description', field: 'Description', width: 175 },
      {
        headerName: 'Auto Create Release',
        field: 'AutoCreateRelease',
        width: 160,
        cellRendererFramework: StatusCellRendererComponent
      }
    ];

    this.defaultColDef = {
      sortable: false,
      resizable: true,
      filter: false,
      autoHeight: true,
      rowSelection: 'single'
    };
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;

    params.columnApi.autoSizeAllColumns();
  }
}
