import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgGridModule } from 'ag-grid-angular';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { BuildsComponent } from './builds/builds.component';
import { TeamCityRoutingModule } from './team-city.routing.module';

@NgModule({
  declarations: [
    BuildsComponent
  ],
  imports: [
    CommonModule,
    AgGridModule.withComponents([]),
    FontAwesomeModule,
    NgxChartsModule,
    SweetAlert2Module.forRoot(),
    TeamCityRoutingModule
  ]
})
export class TeamCityModule { }