import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseApiService } from "../base.api.service";

@Injectable({
  providedIn: 'root'
})
export class DeploymentService extends BaseApiService<object> {

  constructor(private http: HttpClient) {
    super(http);
  }

  getDeployments() {
    return this.getAll(`octopusdeploy-deployments`);
  }
}
