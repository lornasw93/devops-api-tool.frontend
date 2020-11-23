import { Component, OnInit } from '@angular/core';
import { BuildsService } from 'src/core/services/builds.api.service';

@Component({
  selector: 'app-build-requests',
  templateUrl: './build-requests.component.html',
  styleUrls: ['./build-requests.component.less']
})
export class BuildRequestsComponent implements OnInit {
  rowData: any;

  private gridApi;
  private gridColumnApi;

  constructor(private readonly service: BuildsService) { }

  ngOnInit(): void {
    this.setData();
  }

  setData() {
    this.service.getBuilds().subscribe((data: any) => {
      console.log(data);

      this.rowData = data.Items;
    });
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