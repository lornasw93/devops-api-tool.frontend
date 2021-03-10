import { Component } from '@angular/core';
import { faBitbucket, faOctopusDeploy } from '@fortawesome/free-brands-svg-icons';
import { faHammer, faHome, faSearch, faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent {
  faHome = faHome;
  faOctopusDeploy = faOctopusDeploy;
  faBitbucket = faBitbucket;
  faHammer = faHammer;
  faUser = faUser;
  faSearch = faSearch;
}
