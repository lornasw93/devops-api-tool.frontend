import { CommonModule, DatePipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { NgxChartsModule } from "@swimlane/ngx-charts";
import { AgGridModule } from 'ag-grid-angular';
import { OctopusDeployApiService } from "../../../core/services/octopus-deploy.api.service";
import { LoadingSpinnerModule } from "../shared/loading-spinner/loading-spinner.module";
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
import { DeploymentListComponent } from "./deployment-list/deployment-list.component";
import { DeploymentListActionsComponent } from "./deployment-list-actions/deployment-list-actions.component";

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
    ProjectComponent,
    DeploymentListComponent,
    DeploymentListActionsComponent
  ],
  imports: [
    CommonModule, 
    OctopusDeployRoutingModule,
    AgGridModule,
    NgxChartsModule,
    FontAwesomeModule,
    LoadingSpinnerModule,
    SweetAlert2Module
  ],
  providers: [OctopusDeployApiService, DatePipe],
  entryComponents: [DeploymentListActionsComponent],
  exports:[ ]
})
export class OctopusDeployModule { }
