import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BitbucketComponent } from "./bitbucket/bitbucket.component";
import { PullRequestComponent } from "./pull-request/pull-request.component";
import { PullRequestsComponent } from "./pull-requests/pull-requests.component";

const bitbucketRoutes: Routes = [
  { path: '', component: BitbucketComponent },
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'pullrequests', component: PullRequestsComponent },
  { path: 'pullrequests/:id', component: PullRequestComponent },
];

@NgModule({
  imports: [RouterModule.forChild(bitbucketRoutes)],
  exports: [RouterModule]
})
export class BitbucketRoutingModule { }
