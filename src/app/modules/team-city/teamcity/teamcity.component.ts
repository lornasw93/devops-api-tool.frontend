import { Component, OnInit } from '@angular/core';
import dataFile from './Get projects with subprojects build configs and latest 3 builds for each.json';

@Component({
  selector: 'app-teamcity',
  templateUrl: './teamcity.component.html',
  styleUrls: ['./teamcity.component.less']
})
export class TeamCityComponent implements OnInit {
  projects:any;

  constructor() { }

  ngOnInit(): void {

    console.log(dataFile.project);
    
    this.projects = dataFile;
  }
}
