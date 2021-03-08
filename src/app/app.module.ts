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
import { DateAgoPipe } from "../core/pipes/date-ago.pipe";
import { RoutingStateService } from "../core/services/routing-state.service";
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { AccountModule } from "./modules/account/account.module";
import { BitbucketModule } from "./modules/bitbucket/bitbucket.module";
import { HomeComponent } from "./modules/home/home.component";
import { OctopusDeployModule } from "./modules/octopus-deploy/octopus-deploy.module";
import { PageNotFoundComponent } from './modules/shared/page-not-found/page-not-found.component';
import { SharedModule } from "./modules/shared/shared.module";
import { TeamCityModule } from "./modules/team-city/team-city.module";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent,
    DateAgoPipe,
    RoutingStateService
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
    AccountModule,
  ],
  providers: [NgxChartsModule, DatePipe],
  bootstrap: [AppComponent], 
})
export class AppModule { }
