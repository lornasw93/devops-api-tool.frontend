import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from "../shared/page-not-found/page-not-found.component";
import { OctopusDeployComponent } from "./octopus-deploy/octopus-deploy.component"; 
import { DeploymentsComponent } from "./deployments/deployments.component";
import { DeploymentComponent } from "./deployment/deployment.component";
import { TeamsComponent } from "./teams/teams.component";

const octopusDeployRoutes: Routes = [
  { path: '', component: OctopusDeployComponent },
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'deployments', component: DeploymentsComponent },
  { path: 'deployments/:id', component: DeploymentComponent },
  { path: 'teams', component: TeamsComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forChild(octopusDeployRoutes)],
  exports: [RouterModule]
})
export class OctopusDeployRoutingModule { }
