import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faEllipsisV, faInfo, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { ICellRendererAngularComp } from 'ag-grid-angular';

@Component({
  selector: 'app-project-list-actions',
  templateUrl: './project-list-actions.component.html'
})
export class ProjectListActionsComponent implements OnInit, ICellRendererAngularComp, AfterViewInit {
  faInfo = faInfo;
  faEllipsisV = faEllipsisV;
  faExternalLinkAlt = faExternalLinkAlt;

  public showEllipsis: boolean = false;
  params: any;

  constructor(private router: Router) { }

  agInit(params: any) {
    this.params = params;
  }

  afterGuiAttached?(params?: any) { }
  ngAfterViewInit() { }
  ngOnInit() { }

  refresh(): boolean {
    return false;
  }

  read() {
    const id = this.params.value;
     
    this.router.navigate([`octopusdeploy/projects/${id}`]);
  }

  openLive() { 
    const id = this.params.value;

    this.router.navigate([`octopusdeploy/projects/${id}`]);
  }
}
