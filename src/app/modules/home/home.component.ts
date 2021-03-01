import { Component, OnInit } from '@angular/core';
import { faCheck, faSync, faExclamation, faTimes, faEye } from '@fortawesome/free-solid-svg-icons';
import { BuildService } from "../../../core/services/team-city/build.api.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  faCheck = faCheck;
  faSync = faSync;
  faExclamation = faExclamation;
  faTimes = faTimes;
  faEye = faEye;

  //gridApi;
  //gridColumnApi;

  //columnDefs;
  //defaultColDef;
  rowData: any[];

  constructor(private service: BuildService) {
  }

  ngOnInit(): void {
    //this.columnDefs = [
    //  //{ headerName: 'Id', field: 'id', width: 175 },
    //  { headerName: 'Name', field: 'name', width: 260 },
    //  { headerName: 'Builds', field: 'builds', width: 175 },
    //];

    //this.defaultColDef = {
    //  sortable: false,
    //  resizable: true,
    //  filter: false,
    //  autoHeight: true,
    //  rowSelection: 'single'
    //}; 
  }

  //onGridReady(params) {
  //  this.gridApi = params.api;
  //  this.gridColumnApi = params.columnApi;
  //}
}
