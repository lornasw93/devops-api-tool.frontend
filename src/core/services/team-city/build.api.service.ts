import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';
import { BaseApiService } from "../base.api.service";

@Injectable({
  providedIn: 'root'
})
export class BuildService extends BaseApiService<object> {
  constructor(private http: HttpClient) {
    super(http);
  }

  getBuild(id): Observable<any> {
    return this.get(`teamcity-builds-id`);
    //return this.get(`build/${id}`);
  }

  getLatest10Builds(): Observable<any> {
    return this.getAll(`teamcity-get-lastest-10-builds`);
  }

  getBuildQueue(): Observable<any> {
    return this.get(`teamcity-builds-queue`);
  }
}
