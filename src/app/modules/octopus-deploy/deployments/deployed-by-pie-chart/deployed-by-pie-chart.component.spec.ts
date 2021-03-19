import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DeployedByPieChartComponent } from "./deployed-by-pie-chart.component";

describe('DeployedByPieChartComponent', () => {
  let component: DeployedByPieChartComponent;
  let fixture: ComponentFixture<DeployedByPieChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DeployedByPieChartComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeployedByPieChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
