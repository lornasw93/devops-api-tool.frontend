import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from "../shared/page-not-found/page-not-found.component";
import { LoginComponent } from "./login/login.component";
import { AccountComponent } from "./account/account.component";

const accountRoutes: Routes = [
  { path: '', component: AccountComponent },
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forChild(accountRoutes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
