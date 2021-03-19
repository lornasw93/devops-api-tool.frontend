import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { AgGridModule } from 'ag-grid-angular';
import { LoadingSpinnerModule } from "./loading-spinner/loading-spinner.module";
import { NavbarComponent } from "./navbar/navbar.component";
import { BackButtonComponent } from "./back-button/back-button.component";
import { FooterComponent } from "./footer/footer.component";
import { ProjectListActionsComponent } from "./project-list-actions/project-list-actions.component";
import { StatusCellRendererComponent } from "./grids/cell-renderers/status-cell-renderer/status-cell-renderer.component";
import { PageHeaderComponent } from "./page-header/page-header.component";
import { IconCellRendererComponent } from "./grids/cell-renderers/icon-cell-renderer/icon-cell-renderer.component";
import { HyperlinkCellRendererComponent } from "./grids/cell-renderers/hyperlink-cell-renderer/hyperlink-cell-renderer.component";

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
      StatusCellRendererComponent, IconCellRendererComponent, HyperlinkCellRendererComponent
    ]),
    FontAwesomeModule,
    LoadingSpinnerModule
  ],
  exports: [
    BackButtonComponent,
    ProjectListActionsComponent,
    FooterComponent,
    NavbarComponent,
    AgGridModule,
    PageHeaderComponent,
  ],
  entryComponents: [
    ProjectListActionsComponent,
  ],
})
export class SharedModule { }
