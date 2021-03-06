import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { faOctopusDeploy, faBitbucket } from '@fortawesome/free-brands-svg-icons';
import { faHome, faHammer, faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  faHome = faHome;
  faOctopusDeploy = faOctopusDeploy;
  faBitbucket = faBitbucket;
  faHammer = faHammer;
  faUser = faUser;

  ngOnInit(): void {
  }
}
