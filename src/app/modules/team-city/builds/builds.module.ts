import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuildRequestsComponent } from './build-requests/build-requests.component';
import { AgGridModule } from 'ag-grid-angular';

@NgModule({
  declarations: [BuildRequestsComponent],
  imports: [
    CommonModule,    
    AgGridModule.withComponents([]),
  ]
})
export class BuildsModule { }
