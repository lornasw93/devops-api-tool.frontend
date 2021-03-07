import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';
import { PageNotFoundComponent } from './modules/shared/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: '', redirectTo: '/', pathMatch: 'full' }, 
  { path: 'teamcity', loadChildren: () => import('./modules/team-city/team-city.module').then(m => m.TeamCityModule) },
  { path: 'bitbucket', loadChildren: () => import('./modules/bitbucket/bitbucket.module').then(m => m.BitbucketModule) },
  { path: 'octopusdeploy', loadChildren: () => import('./modules/octopus-deploy/octopus-deploy.module').then(m => m.OctopusDeployModule) },
  { path: 'account', loadChildren: () => import('./modules/account/account.module').then(m => m.AccountModule) },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
