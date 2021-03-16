import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { OctopusDeployApiService } from "../../../../core/services/octopus-deploy.api.service";
import { map, mapTo } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-deployments',
  templateUrl: './deployments.component.html'
})
export class DeploymentsComponent implements OnInit {
  rowData: any[];
  totalCount: number;
  count: number;

  gridApi;
  gridColumnApi;
  columnDefs;
  defaultColDef;

  results: any;
  view: any[] = [700, 400];

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  constructor(private service: OctopusDeployApiService,
    private datePipe: DatePipe) { }


  groupedData: any;

  ngOnInit(): void {
    this.service.getDeployments().subscribe((data: any) => {
      this.rowData = data.Items;
      this.totalCount = data.TotalResults;
      this.count = data.Items.length;

      //const groupBy = (array, key) => {
      //  return array.reduce((result, currentValue) => {
      //    (result[currentValue[key]] = result[currentValue[key]] || []).push(currentValue);
      //    return result;
      //  }, {});
      //};
      const groupBy = key => array =>
        array.reduce((objectsByKeyValue, obj) => {
          const value = obj[key];
          objectsByKeyValue[value] = (objectsByKeyValue[value] || []).concat(obj);
          return objectsByKeyValue;
        }, {});


      const source = groupBy('DeployedBy');

      var k = source(data.Items);

      console.log(k);







      //const myUsers = [
      //  { name: 'shark', likes: 'ocean' },
      //  { name: 'turtle', likes: 'pond' },
      //  { name: 'otter', likes: 'fish biscuits' }
      //];

      const usersByLikes = data.Items.map(item => {
        const container = {};
         
        container.name = item.Name;  

        return container;
      });

      console.log(usersByLikes);

      //const example = source.pipe(mapTo(elem => this.groupedData.push({ name: elem.DeployedBy, value: elem.count })));
      //const subscribe = example.subscribe(val => console.log(val)); 

      //var output = [this.groupedData].map((s, i) => ({ name: s, value: s[i] })); 
    });

    //this.service.getDeploymentChart().subscribe((data: any) => {
    //  this.results = data.series;
    //});

    this.columnDefs = [
      { field: 'Id', hide: true },
      { field: 'ProjectId', hide: true },
      { field: 'DeployedById', hide: true },
      { field: 'ReleaseId', hide: true },
      { field: 'Name' },
      {
        headerName: 'Created', field: 'Created',
        cellRenderer: (data) => {
          return data.value ? this.datePipe.transform(data.value, 'dd/MM/yy HH:mm') : data.value;
        }
      },
      { field: 'DeployedBy' }
    ];

    this.defaultColDef = {
      sortable: true,
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
