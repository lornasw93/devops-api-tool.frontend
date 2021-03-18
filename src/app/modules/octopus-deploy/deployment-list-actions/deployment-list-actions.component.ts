import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faExternalLinkAlt, faInfo } from '@fortawesome/free-solid-svg-icons';
import { ICellRendererAngularComp } from 'ag-grid-angular';

@Component({
  selector: 'app-deployment-list-actions',
  templateUrl: './deployment-list-actions.component.html'
})
export class DeploymentListActionsComponent implements OnInit, ICellRendererAngularComp, AfterViewInit {
  faInfo = faInfo;
  faExternalLinkAlt = faExternalLinkAlt;
  
  params: any;

  constructor(private router: Router) { }

  agInit(params: any) {
    this.params = params;
  }

  ngOnInit() { }
  ngAfterViewInit(): void {}

  refresh(): boolean {
    return false;
  }

  read() { 
    this.router.navigate([`octopusdeploy/deployments/${this.params.value}`]);
  }

  openLive() { 
    this.router.navigate([`octopusdeploy/deployments/${this.params.value}`]);
  }
}
