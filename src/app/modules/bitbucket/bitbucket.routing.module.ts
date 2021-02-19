import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from "../shared/page-not-found/page-not-found.component"; 
import { BitbucketComponent } from "./bitbucket/bitbucket.component";
import { PullRequestsComponent } from "./pull-requests/pull-requests.component";
import { PullRequestComponent } from "./pull-request/pull-request.component";

const bitbucketRoutes: Routes = [
  { path: '', component: BitbucketComponent },
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'pullrequests', component: PullRequestsComponent },
  { path: 'pullrequests/:id', component: PullRequestComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forChild(bitbucketRoutes)],
  exports: [RouterModule]
})
export class BitbucketRoutingModule { }
