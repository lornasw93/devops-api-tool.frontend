import { CommonModule, DatePipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { AgGridModule } from 'ag-grid-angular';
import { PageHeaderComponent } from '../shared/components/page-header/page-header.component';
import { BuildInfosComponent } from "./build-infos/build-infos.component";
import { DeploymentProcessesComponent } from "./deployment-processes/deployment-processes.component";
import { DeploymentComponent } from "./deployment/deployment.component";
import { DeploymentsComponent } from "./deployments/deployments.component";
import { EnvironmentsComponent } from "./environments/environments.component";
import { InterruptionsComponent } from "./interruptions/interruptions.component";
import { MachinesComponent } from "./machines/machines.component";
import { OctopusDeployRoutingModule } from "./octopus-deploy.routing.module";
import { OctopusDeployComponent } from "./octopus-deploy/octopus-deploy.component";
import { ProjectGroupsComponent } from "./project-groups/project-groups.component";
import { ProjectComponent } from "./project/project.component";
import { ProjectsComponent } from "./projects/projects.component";
import { ReleasesComponent } from "./releases/releases.component";
import { TeamsComponent } from "./teams/teams.component";
import { UsersComponent } from "./users/users.component";
import { NgxChartsModule } from "@swimlane/ngx-charts";

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
    UsersComponent,  
    ProjectComponent
  ],
  imports: [
    CommonModule, 
    OctopusDeployRoutingModule,
    AgGridModule,
    NgxChartsModule,
  ],
  providers:[DatePipe],
  exports:[ ]
})
export class OctopusDeployModule { }
