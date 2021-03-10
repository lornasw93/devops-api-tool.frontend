import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core'; 
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
    BuildsComponent
  ],
  imports: [
    CommonModule,
    TeamCityRoutingModule 
  ]
})
export class TeamCityModule { }

