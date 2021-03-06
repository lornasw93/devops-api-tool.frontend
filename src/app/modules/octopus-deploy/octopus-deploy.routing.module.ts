import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from "../shared/page-not-found/page-not-found.component";
import { OctopusDeployComponent } from "./octopus-deploy/octopus-deploy.component"; 
import { DeploymentsComponent } from "./deployments/deployments.component";
import { DeploymentComponent } from "./deployment/deployment.component";
import { TeamsComponent } from "./teams/teams.component";
import { BuildInfosComponent } from "./build-infos/build-infos.component";
import { DeploymentProcessesComponent } from "./deployment-processes/deployment-processes.component";
import { EnvironmentsComponent } from "./environments/environments.component";
import { InterruptionsComponent } from "./interruptions/interruptions.component";
import { MachinesComponent } from "./machines/machines.component";
import { ProjectGroupsComponent } from "./project-groups/project-groups.component";
import { ProjectsComponent } from "./projects/projects.component";
import { ReleasesComponent } from "./releases/releases.component";
import { UsersComponent } from "./users/users.component";

const octopusDeployRoutes: Routes = [
  { path: '', component: OctopusDeployComponent },
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'build-infos', component: BuildInfosComponent },
  { path: 'deployments/:id', component: DeploymentComponent },
  { path: 'deployment-processes', component: DeploymentProcessesComponent },
  { path: 'deployments', component: DeploymentsComponent },
  { path: 'environments', component: EnvironmentsComponent },
  { path: 'interruptions', component: InterruptionsComponent },
  { path: 'machines', component: MachinesComponent },
  { path: 'project-groups', component: ProjectGroupsComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'releases', component: ReleasesComponent },
  { path: 'teams', component: TeamsComponent },
  { path: 'users', component: UsersComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forChild(octopusDeployRoutes)],
  exports: [RouterModule]
})
export class OctopusDeployRoutingModule { }
