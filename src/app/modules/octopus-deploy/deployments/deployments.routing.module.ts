import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeploymentComponent } from "./deployment/deployment.component";
import { DeploymentsComponent } from "./deployments.component";

const deploymentsRoutes: Routes = [
  { path: '', component: DeploymentsComponent },
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'deployments/:id', component: DeploymentComponent },
];

@NgModule({
  imports: [RouterModule.forChild(deploymentsRoutes)],
  exports: [RouterModule]
})
export class DeploymentsRoutingModule { }
