import { DatePipe } from "@angular/common/common";
import { Component } from '@angular/core';
import { BaseGrid } from "../../../../../core/base.grid";
import { TeamCityApiService } from "../../../../../core/services/team-city.api.service";

@Component({
  selector: 'app-build-list',
  templateUrl: './build-list.component.html'
})
export class BuildListComponent extends BaseGrid {
  isLoading: boolean;
  noBuilds: boolean;
   
  constructor(private readonly service: TeamCityApiService,
    datePipe: DatePipe) {
    super(datePipe);
  }

  protected getColumnHeaders() {
    return [
      { field: 'id', hide: true },
      { field: 'number' },
      { field: 'status' },
      { field: 'finishOnAgentDate', type: 'dateColumn' },
      //{
      //  type: 'buttonColumn',
      //  cellRendererFramework: DeploymentListActionsComponent
      //}
    ];
  }
   
  protected getRowData(): void {
    this.isLoading = true;
    this.service.getBuilds20().subscribe((data: any) => {
      this.rowData = data.build;
      this.hasBuilds(); 
    }).add(() => {
      this.isLoading = false;
    });
  }
   
  hasBuilds() {
    this.noBuilds = this.rowData == null || this.rowData.length === 0;
  }
}
