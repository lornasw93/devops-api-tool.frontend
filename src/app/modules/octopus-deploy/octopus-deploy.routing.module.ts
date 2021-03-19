import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuildInfosComponent } from "./build-infos/build-infos.component";
import { DeploymentProcessesComponent } from "./deployment-processes/deployment-processes.component";
import { EnvironmentsComponent } from "./environments/environments.component";
import { InterruptionsComponent } from "./interruptions/interruptions.component";
import { MachinesComponent } from "./machines/machines.component";
import { OctopusDeployComponent } from "./octopus-deploy/octopus-deploy.component";
import { ProjectGroupsComponent } from "./project-groups/project-groups.component";
import { ProjectComponent } from "./project/project.component";
import { ProjectsComponent } from "./projects/projects.component";
import { ReleasesComponent } from "./releases/releases.component";
import { TeamsComponent } from "./teams/teams.component";
import { UsersComponent } from "./users/users.component";

const octopusDeployRoutes: Routes = [
  { path: '', component: OctopusDeployComponent },
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'buildinfos', component: BuildInfosComponent },
  { path: 'deployment-processes', component: DeploymentProcessesComponent },
  { path: 'environments', component: EnvironmentsComponent },
  { path: 'interruptions', component: InterruptionsComponent },
  { path: 'machines', component: MachinesComponent },
  { path: 'projectgroups', component: ProjectGroupsComponent },
  { path: 'projects/:id', component: ProjectComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'releases', component: ReleasesComponent },
  { path: 'teams', component: TeamsComponent },
  { path: 'users', component: UsersComponent }, 
  { path: 'deployments', loadChildren: () => import('../../modules/octopus-deploy/deployments/deployments.module').then(m => m.DeploymentsModule) }
];

@NgModule({
  imports: [RouterModule.forChild(octopusDeployRoutes)],
  exports: [RouterModule]
})
export class OctopusDeployRoutingModule { }
