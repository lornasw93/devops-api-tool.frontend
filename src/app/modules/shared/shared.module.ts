import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackButtonComponent } from "./components/back-button/back-button.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { FooterComponent } from "./footer/footer.component";
import { PageHeaderComponent } from "./components/page-header/page-header.component";
import { ProjectListActionsComponent } from "./components/project-list-actions/project-list-actions.component";
import { StatusCellRendererComponent } from "./components/status-cell-renderer/status-cell-renderer.component";

@NgModule({
  declarations: [
    BackButtonComponent,
    PageNotFoundComponent,
    NavbarComponent,
    FooterComponent,
    PageHeaderComponent,
    ProjectListActionsComponent,
    StatusCellRendererComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BackButtonComponent
  ],
  entryComponents: [StatusCellRendererComponent, ProjectListActionsComponent],
})
export class SharedModule { }
