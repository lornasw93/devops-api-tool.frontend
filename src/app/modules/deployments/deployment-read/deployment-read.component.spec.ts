import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeploymentReadComponent } from './deployment-read.component';

describe('DeploymentReadComponent', () => {
  let component: DeploymentReadComponent;
  let fixture: ComponentFixture<DeploymentReadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeploymentReadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeploymentReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
