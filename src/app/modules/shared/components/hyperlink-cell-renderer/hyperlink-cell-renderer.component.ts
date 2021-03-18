import { Component } from "@angular/core";
import { ICellRendererAngularComp } from 'ag-grid-angular';

@Component({
  selector: 'app-hyperlink-cell-renderer',
  templateUrl: './hyperlink-cell-renderer.component.html'
})
export class HyperlinkCellRendererComponent implements ICellRendererAngularComp {
  params: any;
  buildNumber = '';
  buildUrl = '';

  agInit(params: any): void {
    this.params = params;

    const changes = params.data.Changes;
    if (changes.length > 0) {

      for (let i = 0; i < changes.length; i++) {
        const buildInfo = changes[i].BuildInformation;

        for (let j = 0; j < buildInfo.length; j++) { 
          this.buildNumber = buildInfo[j].BuildNumber;
          this.buildUrl = buildInfo[j].BuildUrl;

          return;
        }
      }
    }
  }

  refresh(): boolean {
    return false;
  }
}
