import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AgGridModule } from 'ag-grid-angular';
import { BackButtonComponent } from "./components/back-button/back-button.component";
import { PageHeaderComponent } from './components/page-header/page-header.component';
import { ProjectListActionsComponent } from "./components/project-list-actions/project-list-actions.component";
import { StatusCellRendererComponent } from "./components/status-cell-renderer/status-cell-renderer.component";
import { FooterComponent } from "./footer/footer.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { RouterModule } from '@angular/router';
import { LoadingSpinnerModule } from "./loading-spinner/loading-spinner.module";

@NgModule({
  declarations: [
    BackButtonComponent,
    NavbarComponent,
    FooterComponent,
    ProjectListActionsComponent,
    StatusCellRendererComponent,
    PageHeaderComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    AgGridModule.withComponents([
     StatusCellRendererComponent
    ]),
    FontAwesomeModule,
    LoadingSpinnerModule
  ],
  exports: [
    BackButtonComponent,
    ProjectListActionsComponent,
    PageHeaderComponent,
    FooterComponent,
    NavbarComponent,
    AgGridModule
  ],
  entryComponents: [
    ProjectListActionsComponent,
  ]
})
export class SharedModule { }
