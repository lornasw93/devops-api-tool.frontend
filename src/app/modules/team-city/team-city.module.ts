import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { TeamCityRoutingModule } from "./team-city.routing.module";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TeamCityComponent } from "./team-city/team-city.component";
import { BuildComponent } from "./build/build.component";

@NgModule({
  declarations: [TeamCityComponent, BuildComponent],
  imports: [
    CommonModule,
    TeamCityRoutingModule,
    FontAwesomeModule
  ],
  providers: [DatePipe]
})
export class TeamCityModule { }

