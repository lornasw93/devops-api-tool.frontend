import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeploymentListComponent } from './deployment-list/deployment-list.component';
import { DeploymentReadComponent } from './deployment-read/deployment-read.component';
import { AppRoutingModule } from './deployments.routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { AgGridModule } from 'ag-grid-angular';

@NgModule({
  declarations: [
    DeploymentListComponent,
    DeploymentReadComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    //FormsModule,
    //AgGridModule.withComponents([]),
    //FontAwesomeModule,
    //NgxChartsModule,
    //BrowserAnimationsModule,
    AppRoutingModule,
    //ReactiveFormsModule,
    //SweetAlert2Module.forRoot(),
    DeploymentsModule
  ]
})
export class DeploymentsModule { }
