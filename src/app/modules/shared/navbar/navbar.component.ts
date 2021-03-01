import { Component, OnInit } from '@angular/core';
import { faOctopusDeploy, faBitbucket } from '@fortawesome/free-brands-svg-icons';
import { faHome, faHammer } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent {
  faHome = faHome;
  faOctopusDeploy = faOctopusDeploy;
  faBitbucket = faBitbucket;
  faHammer = faHammer;
}
