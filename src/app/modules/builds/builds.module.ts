import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuildListComponent } from './build-list/build-list.component';
import { BuildReadComponent } from './build-read/build-read.component';

@NgModule({
  declarations: [BuildListComponent, BuildReadComponent],
  imports: [
    CommonModule
  ]
})
export class BuildsModule { }
