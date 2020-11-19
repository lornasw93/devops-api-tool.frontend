  
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { AgGridModule } from 'ag-grid-angular';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from "./modules/home/home.component";
import { BuildsComponent } from "./modules/builds/builds.component"; 
import { PullRequestsComponent } from './modules/pull-requests/pull-requests.component';
import { DeploymentsComponent } from "./modules/deployments/deployments.component";

import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './modules/shared/navbar/navbar.component';
import { FooterComponent } from './modules/shared/footer/footer.component';
import { AutomationComponent } from './modules/automation/automation.component';
import { PageNotFoundComponent } from './modules/shared/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    BuildsComponent,
    DeploymentsComponent,
    AutomationComponent,
    PullRequestsComponent,
    HomeComponent,
    PageNotFoundComponent
  ],
  imports: [
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
  ],
  providers: [DatePipe, NgxChartsModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
