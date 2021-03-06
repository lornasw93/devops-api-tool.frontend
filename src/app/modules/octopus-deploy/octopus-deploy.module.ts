import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OctopusDeployRoutingModule } from "./octopus-deploy.routing.module";
import { DeploymentComponent } from "./deployment/deployment.component";
import { DeploymentsComponent } from "./deployments/deployments.component";
import { OctopusDeployComponent } from "./octopus-deploy/octopus-deploy.component";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
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

@NgModule({
  declarations: [
    BuildInfosComponent,
    DeploymentComponent,
    DeploymentProcessesComponent,
    DeploymentsComponent,
    EnvironmentsComponent,
    InterruptionsComponent,
    MachinesComponent,
    OctopusDeployComponent,
    ProjectGroupsComponent,
    ProjectsComponent,
    ReleasesComponent,
    TeamsComponent,
    UsersComponent
  ],
  imports: [
    CommonModule,
    OctopusDeployRoutingModule,
    FontAwesomeModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class OctopusDeployModule { }
