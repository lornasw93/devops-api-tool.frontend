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

  getDeployments30() {
    return this.getAll(`deployments-30`);
  }

  getDeploymentsAll() {
    return this.getAll(`deployments-all`);
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
