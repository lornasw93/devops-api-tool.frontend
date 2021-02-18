import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; 
import { PageNotFoundComponent } from "../shared/page-not-found/page-not-found.component";
import { BuildComponent } from "./build/build.component";
import { TeamCityComponent } from "./team-city/team-city.component";
import { BuildQueueComponent } from "./build-queue/build-queue.component";

const teamCityRoutes: Routes = [
  { path: '', component: TeamCityComponent },
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'builds/:id', component: BuildComponent },
  { path: 'buildqueue', component: BuildQueueComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forChild(teamCityRoutes)],
  exports: [RouterModule]
})
export class TeamCityRoutingModule { }
