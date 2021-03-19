import { CommonModule, DatePipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { AgGridModule } from 'ag-grid-angular';
import { OctopusDeployApiService } from "../../../../core/services/octopus-deploy.api.service";
import { AllDeploymentsLineChartComponent } from "./all-deployments-line-chart/all-deployments-line-chart.component";
import { DeployedByPieChartComponent } from "./deployed-by-pie-chart/deployed-by-pie-chart.component";
import { DeploymentListActionsComponent } from "./deployment-list-actions/deployment-list-actions.component";
import { DeploymentListComponent } from "./deployment-list/deployment-list.component";
import { DeploymentComponent } from "./deployment/deployment.component";
import { DeploymentsComponent } from './deployments.component';
import { DeploymentsRoutingModule } from "./deployments.routing.module";

@NgModule({
  declarations: [
    DeploymentComponent,
    DeploymentsComponent,
    DeploymentListComponent,
    DeploymentListActionsComponent,
    AllDeploymentsLineChartComponent,
    DeployedByPieChartComponent
  ],
  imports: [
    CommonModule,
    DeploymentsRoutingModule,
    AgGridModule,
    NgxChartsModule,
    //FontAwesomeModule,
    //LoadingSpinnerModule,
    //SweetAlert2Module,
    //PageHeaderComponent
  ],
  providers: [OctopusDeployApiService,
    DatePipe],
  entryComponents: [DeploymentListActionsComponent],
  exports: []
})
export class DeploymentsModule { }
