import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { TeamCityRoutingModule } from "./team-city.routing.module";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TeamCityComponent } from "./team-city/team-city.component";
import { BuildComponent } from "./build/build.component";
import { BuildQueueComponent } from "./build-queue/build-queue.component";
import { ProjectsComponent } from './projects/projects.component';
import { ProjectComponent } from './project/project.component';
import { BuildsComponent } from './builds/builds.component';

@NgModule({
  declarations: [
    TeamCityComponent,
    BuildComponent,
    BuildQueueComponent,
    ProjectsComponent,
    ProjectComponent,
    BuildsComponent
  ],
  imports: [
    CommonModule,
    TeamCityRoutingModule,
    FontAwesomeModule
  ],
  //schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [DatePipe]
})
export class TeamCityModule { }

