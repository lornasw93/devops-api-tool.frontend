import { Router, NavigationEnd } from '@angular/router';
import { Injectable } from '@angular/core';
 
@Injectable()
export class RoutingStateService {
  private history = [];

  constructor(private router: Router
  ) { }

  public loadRouting(): void {
    this.router.events
      .subscribe(event => {
        if (event instanceof NavigationEnd) {
          this.history.push(event.urlAfterRedirects);
        }
      });
  }

  public getHistory(): string[] {
    return this.history;
  }

  public getPreviousUrl(): string {
    return this.history[this.history.length - 2] || '/home';
  }
}
