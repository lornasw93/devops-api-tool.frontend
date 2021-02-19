import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { OctopusDeployRoutingModule } from "./octopus-deploy.routing.module";
import { DeploymentComponent } from "./deployment/deployment.component";
import { DeploymentsComponent } from "./deployments/deployments.component";
import { OctopusDeployComponent } from "./octopus-deploy/octopus-deploy.component";

@NgModule({
  declarations: [
    DeploymentComponent,
    DeploymentsComponent,
    OctopusDeployComponent
  ],
  imports: [
    CommonModule,
    OctopusDeployRoutingModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [DatePipe]
})
export class OctopusDeployModule { }
