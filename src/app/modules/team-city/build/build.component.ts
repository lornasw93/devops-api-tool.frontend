import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import buildFile from './build.json';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { BuildService } from "../../../../core/services/build.api.service";
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-build',
  templateUrl: './build.component.html',
  styleUrls: ['./build.component.less']
})
export class BuildComponent implements OnInit {
  faHome = faHome;

  id: number;
  build: any;
  buildChanges: any;

  duration: any;

  constructor(private activatedRoute: ActivatedRoute,
    private buildService: BuildService,
    private datePipe: DatePipe) {
    this.id = this.activatedRoute.snapshot.params.id;
  }

  ngOnInit(): void {
    this.build = buildFile.build;

    var startDate = this.datePipe.transform(this.build.startDate, 'dd/MMM/yyyy hh:mm:ss');
    var finishDate = this.datePipe.transform(this.build.finishDate, 'dd/MMM/yyyy hh:mm:ss');

    var difference = Math.abs(new Date(finishDate).getTime() - new Date(startDate).getTime());
    var seconds = difference / 1000;
    var minutes = difference / 1000 / 60;
    var hours = minutes / 60;
      
    this.duration = 'difference: ' + hours + 'h:' + minutes + 'm:' + seconds + 's';
  }
}
