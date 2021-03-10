import { CommonModule, DatePipe } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { AgGridModule } from 'ag-grid-angular';
import { BaseApiService } from 'src/core/services/base.api.service';
import { OctopusDeployService } from 'src/core/services/octopus-deploy.api.service';
import { RoutingStateService } from 'src/core/services/routing-state.service';
import { BuildService } from 'src/core/services/team-city/build.api.service';
import { ProjectService } from 'src/core/services/team-city/project.api.service';
import { DateAgoPipe } from "../core/pipes/date-ago.pipe";
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { AccountModule } from "./modules/account/account.module";
import { BitbucketModule } from "./modules/bitbucket/bitbucket.module";
import { HomeComponent } from "./modules/home/home.component";
import { OctopusDeployModule } from "./modules/octopus-deploy/octopus-deploy.module";
import { SharedModule } from "./modules/shared/shared.module";
import { TeamCityModule } from "./modules/team-city/team-city.module";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DateAgoPipe
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AgGridModule.withComponents([]),
    FontAwesomeModule,
    NgxChartsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    SweetAlert2Module.forRoot(),
    SharedModule,
    TeamCityModule,
    BitbucketModule,
    OctopusDeployModule,
    AccountModule
  ],
  // providers: [NgxChartsModule, DatePipe],
  providers: [
    BaseApiService,
    OctopusDeployService,
    RoutingStateService,
    BuildService,
    ProjectService,
  ],
  bootstrap: [AppComponent],
  exports: []
})
export class AppModule { }
