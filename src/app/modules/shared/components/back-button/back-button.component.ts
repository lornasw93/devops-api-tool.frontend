import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RoutingStateService } from "../../../../../core/services/routing-state.service";

@Component({
  selector: 'app-back-button',
  templateUrl: './back-button.component.html'
})
export class BackButtonComponent implements OnInit {
  constructor(
    private router: Router,
    private routingState: RoutingStateService
  ) { }

  ngOnInit() {
  }

  back() {
    this.router.navigate([this.routingState.getPreviousUrl()]);
  }
}
