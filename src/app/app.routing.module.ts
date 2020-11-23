import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';
import { PullRequestsComponent } from './modules/pull-requests/pull-requests.component';
import { PageNotFoundComponent } from './modules/shared/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: '', redirectTo: '/', pathMatch: 'full' },
 // { path: 'builds', component: BuildsComponent },
  { path: 'pullrequests', component: PullRequestsComponent },
  //{ path: 'automation', component: AutomationComponent },
  //{ path: 'deployments', loadChildren: () => import('./modules/deployments/deployments.module').then(m => m.DeploymentsModule) },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
