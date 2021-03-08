import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BackButtonComponent } from "./components/back-button/back-button.component";
import { PageHeaderComponent } from "./components/page-header/page-header.component";
import { ProjectListActionsComponent } from "./components/project-list-actions/project-list-actions.component";
import { StatusCellRendererComponent } from "./components/status-cell-renderer/status-cell-renderer.component";
import { FooterComponent } from "./footer/footer.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";

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
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule { }
