import { CommonModule, DatePipe } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PageHeaderComponent } from "../shared/components/page-header/page-header.component";
import { BuildQueueComponent } from "./build-queue/build-queue.component";
import { BuildComponent } from "./build/build.component";
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
    PageHeaderComponent
  ],
  imports: [
    CommonModule,
    TeamCityRoutingModule,
    FontAwesomeModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TeamCityModule { }

