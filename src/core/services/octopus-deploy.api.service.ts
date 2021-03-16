import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseApiService } from "./base.api.service";

@Injectable({
  providedIn: 'root'
})
export class OctopusDeployApiService extends BaseApiService<object> {
  resourceName = 'octopusdeploy';

  constructor(private http: HttpClient) {
    super(http);
  }

  getDeployments() {
    return this.getAll(`deployments`);
  }

  getDeploymentChart() {
    return this.getAll(`deployments-chart`);
  }

  getTeams() {
    return this.getAll(`teams`);
  }

  getUsers() {
    return this.getAll(`users`);
  }

  getProjects() {
    return this.getAll(`projects`);
  }

  getProject(id) {
    return this.getAll(`project-id`);
  }

  getReleases() {
    return this.getAll(`releases`);
  }

  getEnvironments() {
    return this.getAll(`environments`);
  }
}
