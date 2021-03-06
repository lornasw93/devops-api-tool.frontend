import { Component, OnInit } from '@angular/core';
import { BuildService } from "../../../../core/services/team-city/build.api.service";

@Component({
  selector: 'app-builds',
  templateUrl: './builds.component.html' 
})
export class BuildsComponent implements OnInit {

  builds: any[];


  constructor(private service: BuildService) { }

  ngOnInit(): void { 
    //this.service.getLatest10Builds().subscribe((data: any) => {
    //  this.builds = data;
    //});
  }
}
