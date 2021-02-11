import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseApiService } from './base.api.service';

@Injectable({
  providedIn: 'root'
})
export class TeamCityService extends BaseApiService<object> {
  constructor(private http: HttpClient) {
    super(http);
  }

  //getAllProjectSubprojectBuildConfigsAndLatest3BuildResults() {
  //  return this.getAll(`tc/builds`);
  //}

  getBuildsByMonthChart(project) {
    return this.getChart(`builds/${project}`);
  }
}
