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
import { AppRoutingModule } from './app.routing.module';
import { NavbarComponent } from './modules/shared/navbar/navbar.component';
import { FooterComponent } from './modules/shared/footer/footer.component';
import { PageNotFoundComponent } from './modules/shared/page-not-found/page-not-found.component';
import { TeamCityModule } from "./modules/team-city/team-city.module";
import { DateAgoPipe } from "../core/pipes/date-ago.pipe";
import { BitbucketModule } from "./modules/bitbucket/bitbucket.module";
import { OctopusDeployModule } from "./modules/octopus-deploy/octopus-deploy.module";
import { AccountModule } from "./modules/account/account.module";
import { StatusCellRendererComponent } from "./modules/shared/components/status-cell-renderer/status-cell-renderer.component";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    PageNotFoundComponent,
    DateAgoPipe,
    StatusCellRendererComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    //AgGridModule.withComponents([]),
    FontAwesomeModule,
    NgxChartsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    SweetAlert2Module.forRoot(),
    TeamCityModule,
    BitbucketModule,
    OctopusDeployModule,
    AccountModule
  ],
  providers: [NgxChartsModule, DatePipe],
  entryComponents: [StatusCellRendererComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
