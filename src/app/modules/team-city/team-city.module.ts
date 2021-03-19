import { CommonModule, DatePipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { AgGridModule } from 'ag-grid-angular';
import { TeamCityApiService } from "../../../core/services/team-city.api.service";
import { LoadingSpinnerModule } from "../shared/loading-spinner/loading-spinner.module";
import { BuildQueueComponent } from "./build-queue/build-queue.component";
import { BuildComponent } from "./build/build.component";
import { BuildListActionsComponent } from './builds/build-list-actions/build-list-actions.component';
import { BuildListComponent } from "./builds/build-list/build-list.component";
import { BuildsComponent } from './builds/builds.component';
import { ProjectComponent } from './project/project.component';
import { ProjectsComponent } from './projects/projects.component';
import { TeamCityRoutingModule } from "./team-city.routing.module";
import { TeamCityComponent } from "./team-city/team-city.component";

@NgModule({
  declarations: [
    TeamCityComponent,
    BuildComponent,
    BuildQueueComponent,
    ProjectsComponent,
    ProjectComponent,
    BuildsComponent,
    BuildListComponent,
    BuildListActionsComponent,
  ],
  imports: [
    CommonModule,
    TeamCityRoutingModule, 
    AgGridModule,
    NgxChartsModule,
    FontAwesomeModule,
    LoadingSpinnerModule,
    SweetAlert2Module, 
  ],
  providers: [TeamCityApiService,
    DatePipe],
  entryComponents: [BuildListActionsComponent],
  exports: []
})
export class TeamCityModule { }

