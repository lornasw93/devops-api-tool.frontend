import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeploymentListComponent } from './deployment-list/deployment-list.component';
import { DeploymentReadComponent } from './deployment-read/deployment-read.component';
import { AppRoutingModule } from './deployments.routing.module';

@NgModule({
  declarations: [
    DeploymentListComponent,
    DeploymentReadComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ]
})
export class DeploymentsModule { }
