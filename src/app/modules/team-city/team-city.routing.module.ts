import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuildQueueComponent } from "./build-queue/build-queue.component";
import { BuildComponent } from "./build/build.component";
import { BuildsComponent } from "./builds/builds.component";
import { ProjectComponent } from "./project/project.component";
import { ProjectsComponent } from "./projects/projects.component";
import { TeamCityComponent } from "./team-city/team-city.component";

const teamCityRoutes: Routes = [
  { path: '', component: TeamCityComponent },
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'projects', component: ProjectsComponent },
  { path: 'projects/:id', component: ProjectComponent },
  { path: 'builds', component: BuildsComponent },
  { path: 'builds/:id', component: BuildComponent },
  { path: 'builds/queue', component: BuildQueueComponent },
];

@NgModule({
  imports: [RouterModule.forChild(teamCityRoutes)],
  exports: [RouterModule]
})
export class TeamCityRoutingModule { }
