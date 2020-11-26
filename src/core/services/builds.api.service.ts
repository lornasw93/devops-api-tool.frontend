import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseApiService } from './base.api.service';

@Injectable({
  providedIn: 'root'
})
export class BuildsService extends BaseApiService<object> {

  constructor(private http: HttpClient) {
    super(http);
  }

  buildResource = 'builds';

  getBuilds() {
    return this.getAll(`tc/builds`);
  }

  // getBuild(project) {
  //   return this.get(`${this.buildResource}?project=${project}`);
  // }
  // getBuildsCount(project) {
  //   return this.getCount(`${this.buildResource}/count?project=${project}`);
  // }

  // getBuildsByMonthChart(project) {
  //   return this.getChart(`${this.buildResource}/chart/byMonth/${project}`);
  // }

  // getBuildsByResultChart(project) {
  //   return this.getChart(`${this.buildResource}/chart/byResult/${project}`);
  // }
}