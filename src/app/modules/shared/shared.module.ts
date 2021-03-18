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
import { IconCellRendererComponent } from "./components/icon-cell-renderer/icon-cell-renderer.component";
import { HyperlinkCellRendererComponent } from './components/hyperlink-cell-renderer/hyperlink-cell-renderer.component';

@NgModule({
  declarations: [
    BackButtonComponent,
    NavbarComponent,
    FooterComponent,
    ProjectListActionsComponent,
    StatusCellRendererComponent,
    PageHeaderComponent,
    IconCellRendererComponent,
    HyperlinkCellRendererComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    AgGridModule.withComponents([
      StatusCellRendererComponent, IconCellRendererComponent,HyperlinkCellRendererComponent
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
