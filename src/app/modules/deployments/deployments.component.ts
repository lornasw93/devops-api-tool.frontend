import { Component, OnInit } from '@angular/core';
import { DeploymentsService } from 'src/core/deployments.api.service';

@Component({
  selector: 'app-deployments',
  templateUrl: './deployments.component.html',
  styleUrls: ['./deployments.component.less']
})
export class DeploymentsComponent implements OnInit {
  rowData: any;
  // count: any;
  // private gridApi;
  // private gridColumnApi;
  // private rowSelection;

  constructor(private readonly service: DeploymentsService) {
    //this.rowSelection = "single";
  }

  ngOnInit(): void {
    this.setData();
  }

  setData() {
    this.service.getDeployments().subscribe((data: any) => {
      this.rowData = data.Items;
      console.log(this.rowData)
    });
   }

  // onGridReady(params) {
  //   this.gridApi = params.api;
  //   this.gridColumnApi = params.columnApi;
  //   this.gridApi.sizeColumnsToFit();
  // }

  // columnDefs = [
  //   { headerName: 'Id', field: 'id' },
  //   { headerName: 'Name', field: 'name' }
  // ];
}
