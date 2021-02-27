import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; 
import { PageNotFoundComponent } from "../shared/page-not-found/page-not-found.component";
import { BuildComponent } from "./build/build.component";
import { TeamCityComponent } from "./team-city/team-city.component";
import { BuildQueueComponent } from "./build-queue/build-queue.component";
import { ProjectsComponent } from "./projects/projects.component";
import { ProjectComponent } from "./project/project.component";
import { BuildsComponent } from "./builds/builds.component";

const teamCityRoutes: Routes = [
  { path: '', component: TeamCityComponent },
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'projects/:id', component: ProjectComponent },
  { path: 'builds', component: BuildsComponent },
  { path: 'builds/:id', component: BuildComponent },
  { path: 'builds/queue', component: BuildQueueComponent }
];

@NgModule({
  imports: [RouterModule.forChild(teamCityRoutes)],
  exports: [RouterModule]
})
export class TeamCityRoutingModule { }
