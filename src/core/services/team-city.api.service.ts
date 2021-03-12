import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';
import { BaseApiService } from "./base.api.service";

@Injectable({
  providedIn: 'root'
})
export class TeamCityApiService extends BaseApiService<object> {
  resourceName = 'teamcity';

  constructor(private http: HttpClient) {
    super(http);
  }

  getBuild(id): Observable<any> {
    return this.get(`builds-id`);
    //return this.get(`build/${id}`);
  }
    
  getBuildQueue(): Observable<any> {
    return this.get(`builds-queue`);
  }

  getOverview(): Observable<any> {
    return this.getAll(`home-overview`);
  }
  
  getProject(id) {
    return this.get('projects-id');
    //return this.get(`projects/${id}`);
  }

  getProjects() {
    return this.getAll('projects');
    //return this.getAll(`projects`);
  }

  getProjectsBuildTypes() {
    return this.getAll('build-types-with-project-details');
  }
}
