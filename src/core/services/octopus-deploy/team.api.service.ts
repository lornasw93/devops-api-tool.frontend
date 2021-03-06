import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseApiService } from "../base.api.service";

@Injectable({
  providedIn: 'root'
})
export class TeamService extends BaseApiService<object> {

  constructor(private http: HttpClient) {
    super(http);
  }

  getTeams() {
    return this.getAll(`octopusdeploy-teams`);
  }
}
