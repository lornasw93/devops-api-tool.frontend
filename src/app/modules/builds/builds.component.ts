import { Component, OnInit, Input } from '@angular/core';
import { DatePipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-builds',
  templateUrl: './builds.component.html',
  styleUrls: ['./builds.component.less']
})
export class BuildsComponent implements OnInit {
  // constructor(private activatedRoute: ActivatedRoute,
  //   private readonly service: BuildsService,
  //   private datePipe: DatePipe, 
  //   private location: Location) {
  // }

   ngOnInit() : void{
  //   this.setData();
   }

  // goBack() {
  //   this.location.back();
  // }

  // setData() {
  //   // this.service.getBuilds(this.projectId).subscribe((data: any) => {
  //   //   this.rowData = data.result.value;
  //   // });
     
  //   // this.service.getBuildsByMonthChart(this.projectId).subscribe((data: any) => {
  //   //   this.seriesByMonth = [data];
  //   // });
 
  //   // this.service.getBuildsByResultChart(this.projectId).subscribe((data: any) => {
  //   //   this.seriesByResult = [data];
  //   // });
  // }
}
