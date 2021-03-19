import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LineChartComponent } from './line-chart/line-chart.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@NgModule({
  declarations: [LineChartComponent, PieChartComponent],
  imports: [
    CommonModule,
    NgxChartsModule
  ]
})
export class ChartsModule { }
