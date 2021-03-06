import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { TeamCityApiService } from 'src/core/services/team-city.api.service';

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
  status: string;
  statusColor: string;

  constructor(private activatedRoute: ActivatedRoute,
    private service: TeamCityApiService) {
    this.id = this.activatedRoute.snapshot.params.id;
  }

  ngOnInit(): void {
    this.service.getBuild(this.id).subscribe((data: any) => {
      this.build = data;
      this.buildChanges = data.changes;
      this.status = data.status;
      this.statusColor = data.status;
    });

    //if (this.status === 'SUCCESS') {
    //  this.statusColor = '#28a745';
    //} else {
    //  this.statusColor = '#dc3545';
    //}

    //var startDate = this.datePipe.transform(this.build.startDate, 'dd/MM/yyyy H:mm:ss');
    //var finishDate = this.datePipe.transform(this.build.finishDate, 'dd/MM/yyyy H:mm:ss');

    //var difference = Math.abs(new Date(finishDate).getTime() - new Date(startDate).getTime());
    //var seconds = difference / 1000;
    //var minutes = difference / 1000 / 60;
    //var hours = minutes / 60;

    //this.duration = 'difference: ' + hours + 'h:' + minutes + 'm:' + seconds + 's';
  }
}
