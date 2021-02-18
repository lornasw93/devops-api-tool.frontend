import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseApiService } from './base.api.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BuildService extends BaseApiService<object> {
  constructor(private http: HttpClient) {
    super(http);
  }

  getBuild(id): Observable<any> {
    return this.get(`build`);
    //return this.get(`build/${id}`);
  }
  
  getBuildQueue(): Observable<any> {
    return this.get(`buildQueue`);
  }
}
