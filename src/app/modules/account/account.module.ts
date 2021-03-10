import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from "../shared/shared.module";
import { AccountComponent } from './account/account.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [LoginComponent, AccountComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class AccountModule { }
