import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './modules/home/home.component'; 
import { PageNotFoundComponent } from './modules/shared/page-not-found/page-not-found.component';
import { BuildsComponent } from "./modules/builds/builds.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'builds', component: BuildsComponent },
  //{ path: 'team-city', loadChildren: () => import('./modules/team-city/team-city.module').then(m => m.TeamCityModule) },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
