import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeploymentProcessesComponent } from './deployment-processes.component';

describe('DeploymentProcessesComponent', () => {
  let component: DeploymentProcessesComponent;
  let fixture: ComponentFixture<DeploymentProcessesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeploymentProcessesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeploymentProcessesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
