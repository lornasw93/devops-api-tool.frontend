import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { TeamCityRoutingModule } from "./team-city.routing.module";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TeamCityComponent } from "./team-city/team-city.component";
import { BuildComponent } from "./build/build.component";
import { BuildQueueComponent } from "./build-queue/build-queue.component";

@NgModule({
  declarations: [
    TeamCityComponent,
    BuildComponent,
    BuildQueueComponent
  ],
  imports: [
    CommonModule,
    TeamCityRoutingModule,
    FontAwesomeModule
  ],
  providers: [DatePipe]
})
export class TeamCityModule { }

