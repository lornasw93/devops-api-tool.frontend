import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from '../shared/page-not-found/page-not-found.component';
import { BuildsComponent } from './builds/builds.component';

const routes: Routes = [
//   { path: '', component: HomeComponent },
//   { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'builds', component: BuildsComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeamCityRoutingModule { }
