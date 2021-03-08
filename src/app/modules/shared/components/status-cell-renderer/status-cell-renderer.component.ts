import { faCog } from '@fortawesome/free-solid-svg-icons';
import { Component } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { Status } from "../../../../../core/models/status.model";

@Component({
  selector: 'app-status-cell-renderer',
  templateUrl: './status-cell-renderer.component.html'
})
export class StatusCellRendererComponent implements ICellRendererAngularComp {
  params: any;

  status: Status;

  agInit(params: any): void {
    this.params = params;

    const x = new Status();

    x.status = this.params.value;
    x.cssClass = this.getCss(this.params.value);

    this.status = x; 
  }

  getCss(status) {
    if (status === true) {
      return 'autoCreateRelease-true';
    }
    else if (status === false) {
      return 'autoCreateRelease-false';
    }

    return '';
  }

  refresh(): boolean {
    return false;
  }
}
