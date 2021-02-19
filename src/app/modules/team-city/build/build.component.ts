import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { BuildService } from "../../../../core/services/team-city/build.api.service";

@Component({
  selector: 'app-build',
  templateUrl: './build.component.html' 
})
export class BuildComponent implements OnInit {
  faHome = faHome;

  id: number;
  build: any;
  buildChanges: any;
  duration: any;
   
  constructor(private activatedRoute: ActivatedRoute,
    private service: BuildService) {
    this.id = this.activatedRoute.snapshot.params.id;
  }

  ngOnInit(): void {
    this.service.getBuild(this.id).subscribe((data: any) => {
      this.build = data;
      this.buildChanges = data.changes;
    });

    //this.build = buildFile.build;

    //var startDate = this.datePipe.transform(this.build.startDate, 'dd/MM/yyyy H:mm:ss');
    //var finishDate = this.datePipe.transform(this.build.finishDate, 'dd/MM/yyyy H:mm:ss');

    //var difference = Math.abs(new Date(finishDate).getTime() - new Date(startDate).getTime());
    //var seconds = difference / 1000;
    //var minutes = difference / 1000 / 60;
    //var hours = minutes / 60;

    //this.duration = 'difference: ' + hours + 'h:' + minutes + 'm:' + seconds + 's';
  }
}
