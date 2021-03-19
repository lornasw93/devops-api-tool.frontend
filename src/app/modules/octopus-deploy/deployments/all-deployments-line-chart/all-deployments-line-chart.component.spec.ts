import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AllDeploymentsLineChartComponent } from './all-deployments-line-chart.component';

describe('AllDeploymentsLineChartComponent', () => {
  let component: AllDeploymentsLineChartComponent;
  let fixture: ComponentFixture<AllDeploymentsLineChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AllDeploymentsLineChartComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllDeploymentsLineChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
