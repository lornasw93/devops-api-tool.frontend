import { AfterViewInit, Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faEllipsisV, faInfo, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { ICellRendererAngularComp } from 'ag-grid-angular';

@Component({
  selector: 'app-department-list-actions',
  templateUrl: './department-list-actions.component.html'
})
export class DepartmentListActionsComponent implements OnInit, ICellRendererAngularComp, AfterViewInit {
  faInfo = faInfo;
  faEllipsisV = faEllipsisV;
  faExternalLinkAlt = faExternalLinkAlt;

  public showEllipsis: boolean = false;
  params: any;

  constructor(private router: Router) { }

  agInit(params: any) {
    this.params = params;
  }

  ngOnInit() { }

  ngAfterViewInit(): void {
    this.onResize(0);
  }

  refresh(): boolean {
    return false;
  }

  read() { 
    this.router.navigate([`octopusdeploy/deployments/${this.params.value}`]);
  }

  openLive() { 
    this.router.navigate([`octopusdeploy/deployments/${this.params.value}`]);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    if (this.showEllipsis != null) {
      this.showEllipsis = false;

      if (window.innerWidth <= 650) {
        this.showEllipsis = true;
      }
    }
  }
}
