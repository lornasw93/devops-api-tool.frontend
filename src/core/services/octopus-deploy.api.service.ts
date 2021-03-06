import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseApiService } from "./base.api.service";

@Injectable({
  providedIn: 'root'
})
export class OctopusDeployService extends BaseApiService<object> {

  constructor(private http: HttpClient) {
    super(http);
  }

  getDeployments() {
    return this.getAll(`octopusdeploy-deployments`);
  }

  getTeams() {
    return this.getAll(`octopusdeploy-teams`);
  }

  getUsers() {
    return this.getAll(`octopusdeploy-users`);
  }

  getProjects() {
    return this.getAll(`octopusdeploy-projects`);
  }

  getReleases() {
    return this.getAll(`octopusdeploy-releases`);
  }
}
