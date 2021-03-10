import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from "../shared/shared.module";
import { BitbucketRoutingModule } from "./bitbucket.routing.module";
import { BitbucketComponent } from "./bitbucket/bitbucket.component";
import { PullRequestComponent } from "./pull-request/pull-request.component";
import { PullRequestsComponent } from "./pull-requests/pull-requests.component";

@NgModule({
  declarations: [
    PullRequestComponent,
    PullRequestsComponent,
    BitbucketComponent
  ],
  imports: [
    CommonModule,
    BitbucketRoutingModule,
    SharedModule
  ]
})
export class BitbucketModule { }
