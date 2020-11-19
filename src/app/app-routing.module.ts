import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AutomationComponent } from './modules/automation/automation.component';
import { BuildsComponent } from './modules/builds/builds.component';
import { DeploymentsComponent } from './modules/deployments/deployments.component';
import { HomeComponent } from './modules/home/home.component';
import { PullRequestsComponent } from './modules/pull-requests/pull-requests.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'builds', component: BuildsComponent },
  { path: 'deployments', component: DeploymentsComponent },
  { path: 'pullrequests', component: PullRequestsComponent },
  { path: 'automation', component: AutomationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
