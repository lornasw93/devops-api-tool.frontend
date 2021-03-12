import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { NgxChartsModule } from '@swimlane/ngx-charts';

// Pipes
import { DateAgoPipe } from "../core/pipes/date-ago.pipe";

// Services
import { OctopusDeployApiService } from 'src/core/services/octopus-deploy.api.service';
import { RoutingStateService } from 'src/core/services/routing-state.service';
import { TeamCityApiService } from 'src/core/services/team-city.api.service';

// Components
import { AppComponent } from './app.component';
import { HomeComponent } from "./modules/home/home.component";

// Modules
import { SharedModule } from "./modules/shared/shared.module";
import { OctopusDeployModule } from "./modules/octopus-deploy/octopus-deploy.module";
import { TeamCityModule } from "./modules/team-city/team-city.module";
import { AppRoutingModule } from './app.routing.module';
import { BitbucketModule } from "./modules/bitbucket/bitbucket.module";

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
    SharedModule, 
    NgxChartsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    SweetAlert2Module.forRoot(), 
    TeamCityModule,
    BitbucketModule,
    OctopusDeployModule 
  ],
  // providers: [NgxChartsModule, DatePipe],
  providers: [
    //BaseApiService,
    OctopusDeployApiService,
    RoutingStateService,
    TeamCityApiService,
  ],
  bootstrap: [AppComponent],
  exports: [SharedModule,]
})
export class AppModule { }

