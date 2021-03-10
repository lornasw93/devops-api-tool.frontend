import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { OctopusDeployApiService } from "../../../../core/services/octopus-deploy.api.service";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html'
})
export class UsersComponent implements OnInit {
  users: any;

  constructor(private service: OctopusDeployApiService) { }

  ngOnInit(): void { 
    this.service.getUsers().subscribe((data: any[]) => {
      this.users = data;

      console.log(data);
    });
  }

  columnDefs = [
    { field: 'make', sortable: true, filter: true },
    { field: 'model', sortable: true, filter: true },
    { field: 'price', sortable: true, filter: true }
  ];
}
