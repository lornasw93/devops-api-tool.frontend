import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseApiService } from './base.api.service';
//import buildFile from './build.json';
//import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BuildService extends BaseApiService<object> {
  //constructor(private http: HttpClient) {
  //  super(http);
  //}

  //getBuild(id): Observable<any> {
  //  //return this.get(`teamcity/builds/${id}`);
  //  return this.get(buildFile);
  //}


  constructor(private http: HttpClient) {
    super(http);
  }

  //public getBuild(id): Observable<any> {
  //  return this.http.get(buildFile);
  //}




  getBuildChanges() {

  }
}
