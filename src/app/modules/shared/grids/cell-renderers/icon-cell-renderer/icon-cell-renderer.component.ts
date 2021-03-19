import { Component } from "@angular/core";
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faUsers, faCity } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-icon-cell-renderer',
  templateUrl: './icon-cell-renderer.component.html'
})
export class IconCellRendererComponent implements ICellRendererAngularComp {
  faUsers = faUsers;
  faCity = faCity;

  params: any;
  icons: IconDefinition[];

  agInit(params: any): void {
    this.params = params;
    if (this.params.value === 'Teamcity') {
      this.icons = [faUsers, faCity];
    }

    return this.params.value;
  }

  refresh(): boolean {
    return false;
  }
}
