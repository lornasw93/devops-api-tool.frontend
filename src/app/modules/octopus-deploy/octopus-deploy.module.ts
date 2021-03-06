import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OctopusDeployRoutingModule } from "./octopus-deploy.routing.module";
import { DeploymentComponent } from "./deployment/deployment.component";
import { DeploymentsComponent } from "./deployments/deployments.component";
import { OctopusDeployComponent } from "./octopus-deploy/octopus-deploy.component";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TeamsComponent } from "./teams/teams.component";

@NgModule({
  declarations: [
    DeploymentComponent,
    DeploymentsComponent,
    OctopusDeployComponent,
    TeamsComponent
  ],
  imports: [
    CommonModule,
    OctopusDeployRoutingModule,
    FontAwesomeModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class OctopusDeployModule { }
