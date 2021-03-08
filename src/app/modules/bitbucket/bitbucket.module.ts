import { CommonModule, DatePipe } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
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
    BitbucketRoutingModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class BitbucketModule { }
