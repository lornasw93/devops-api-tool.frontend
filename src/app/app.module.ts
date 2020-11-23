  
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule, DatePipe } from '@angular/common';
import { AgGridModule } from 'ag-grid-angular';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from "./modules/home/home.component";
import { PullRequestsComponent } from './modules/pull-requests/pull-requests.component';
import { AppRoutingModule } from './app.routing.module';
import { NavbarComponent } from './modules/shared/navbar/navbar.component';
import { FooterComponent } from './modules/shared/footer/footer.component';
import { PageNotFoundComponent } from './modules/shared/page-not-found/page-not-found.component';
import { BuildsModule } from './modules/team-city/builds/builds.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    PullRequestsComponent,
    HomeComponent,
    PageNotFoundComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
   // FormsModule,
    AgGridModule.withComponents([]),
    FontAwesomeModule,
   // NgxChartsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
  //  ReactiveFormsModule,
   // SweetAlert2Module.forRoot(),
   // DeploymentsModule
   BuildsModule
  ],
  providers: [
    //, NgxChartsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
