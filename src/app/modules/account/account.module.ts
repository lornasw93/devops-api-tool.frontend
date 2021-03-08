import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { AccountComponent } from './account/account.component';
import { LoginComponent } from './login/login.component'; 

@NgModule({
  declarations: [LoginComponent, AccountComponent],
  imports: [
    CommonModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AccountModule { }
