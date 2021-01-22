import { Component, OnInit } from '@angular/core';
import { BuildsService } from 'src/core/services/builds.api.service';

@Component({
  selector: 'app-builds',
  templateUrl: './builds.component.html',
  styleUrls: ['./builds.component.less']
})
export class BuildsComponent implements OnInit {
  seriesByMonth: any[];
  seriesByResult: any[];
  seriesByRequest: any[];
  rowData: any;
  count: any;

  view: any[] = [700, 400];
  legend = true;
  showLabels = true;
  animations = true;
  xAxis = true;
  yAxis = true;
  showYAxisLabel = true;
  showXAxisLabel = true;
  xAxisLabel = 'Month';
  yAxisLabel = 'Count';
  timeline = true;
  colorScheme = { domain: ['#5AA454'] };

  projectId: string;

  private gridApi;
  private gridColumnApi;
  private rowSelection;

  constructor(private service: BuildsService) { }

  ngOnInit(): void {
    this.setData();
  }

  setData() {
    this.service.getBuilds().subscribe((data: any) => {
      this.rowData = data.build;
    });

    // this.service.getBuildsByMonthChart(this.projectId).subscribe((data: any) => {
    //   this.seriesByMonth = [data];
    // });

    // this.service.getBuildsByRequestChart(this.projectId).subscribe((data: any) => {
    //   this.seriesByRequest = [data];
    // });

    // this.service.getBuildsByResultChart(this.projectId).subscribe((data: any) => {
    //   this.seriesByResult = [data];
    // });
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    this.gridApi.sizeColumnsToFit();
  }

  columnDefs = [
    { field: 'id' },
    { field: 'buildTypeId' },
    { field: 'number' },
    { field: 'status' },
    { field: 'state' },
    { field: 'branchName' },
    { field: 'href' },
    { field: 'webUrl' }
  ];

  defaultColDef = {
    sortable: false,
    resizable: true,
    filter: false,
    autoHeight: true,
    rowSelection: 'single'
  };
}
