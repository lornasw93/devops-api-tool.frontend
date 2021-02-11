import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import buildFile from './data.json';
import { faHome } from '@fortawesome/free-solid-svg-icons'; 

@Component({
  selector: 'app-build',
  templateUrl: './build.component.html',
  styleUrls: ['./build.component.less']
})
export class BuildComponent implements OnInit {
  id: number;
  build: any;
  statusColor: string;

  faHome = faHome;

  constructor(private activatedRoute: ActivatedRoute) {
    this.id = this.activatedRoute.snapshot.params.id;
  }

  ngOnInit(): void {
    console.log(buildFile);

    this.build = buildFile.build;
    this.statusColor = buildFile.build.status;

    console.log(this.statusColor);

    if (status === "SUCCESS")
      this.statusColor = "Green";
    if (status === "FAILURE" || status === "ERROR")
      this.statusColor = "Red";
    if (status === "UNKNOWN")
      this.statusColor = "Gray";
  }
}
