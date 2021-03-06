import { Component, OnInit } from '@angular/core';
import { OctopusDeployService } from "../../../../core/services/octopus-deploy.api.service";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html' 
})
export class UsersComponent implements OnInit {
  users: any;

  constructor(private service: OctopusDeployService) { }

  ngOnInit(): void {
    this.service.getUsers().subscribe((data: any[]) => {
      this.users = data;

      console.log(data);
    });
  }
}
