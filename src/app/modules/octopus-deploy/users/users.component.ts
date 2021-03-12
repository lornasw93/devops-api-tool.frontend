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

      // const i = this.users.Items.map(elem => elem.DisplayName != null && this.hasWhiteSpace(elem.DisplayName) ?
      //  elem.DisplayName = elem.DisplayName.split(' ') : elem.DisplayName);
    });
  }

  hasWhiteSpace(s) {
    return s.indexOf(' ') >= 0;
  }
}
