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
import { DeploymentsModule } from "./deployments/deployments.module";
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

@NgModule({
  declarations: [
    BuildInfosComponent,
    DeploymentProcessesComponent,
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
  ],
  imports: [
    CommonModule,
    OctopusDeployRoutingModule,
    AgGridModule,
    NgxChartsModule,
    FontAwesomeModule,
    SweetAlert2Module,
    LoadingSpinnerModule,
    DeploymentsModule
    //PageHeaderComponent
  ],
  providers: [OctopusDeployApiService,
    DatePipe],
})
export class OctopusDeployModule { }
