import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './modules/shared/navbar/navbar.component';
import { FooterComponent } from './modules/shared/footer/footer.component';
import { BuildsComponent } from './modules/builds/builds.component';
import { DeploymentsComponent } from './modules/deployments/deployments.component';
import { AutomationComponent } from './modules/automation/automation.component';
import { PullRequestsComponent } from './modules/pull-requests/pull-requests.component';
import { HomeComponent } from './modules/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    BuildsComponent,
    DeploymentsComponent,
    AutomationComponent,
    PullRequestsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
