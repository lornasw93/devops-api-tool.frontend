import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamCityRoutingModule } from "./team-city.routing.module";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TeamCityComponent } from "./team-city/team-city.component";

@NgModule({
  declarations: [TeamCityComponent],
  imports: [
    CommonModule,
    TeamCityRoutingModule,
    FontAwesomeModule
  ]
})
export class TeamCityModule { }

