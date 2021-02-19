import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseApiService } from "../base.api.service";

@Injectable({
  providedIn: 'root'
})
export class ProjectService extends BaseApiService<object> {

  constructor(private http: HttpClient) {
    super(http);
  }

  getProject(id) {
    return this.get('teamcity-projects-id');
    //return this.get(`projects/${id}`);
  }

  getProjects() {
    return this.getAll('teamcity-projects');
    //return this.getAll(`projects`);
  }
}
