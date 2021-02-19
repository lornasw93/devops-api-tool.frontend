import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { BitbucketRoutingModule } from "./bitbucket.routing.module";
import { PullRequestComponent } from "./pull-request/pull-request.component";
import { PullRequestsComponent } from "./pull-requests/pull-requests.component";
import { BitbucketComponent } from "./bitbucket/bitbucket.component";

@NgModule({
  declarations: [
    PullRequestComponent,
    PullRequestsComponent,
    BitbucketComponent
  ],
  imports: [
    CommonModule,
    BitbucketRoutingModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [DatePipe]
})
export class BitbucketModule { }
