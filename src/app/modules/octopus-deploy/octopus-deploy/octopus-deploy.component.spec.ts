import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OctopusDeployComponent } from './octopus-deploy.component';

describe('OctopusDeployComponent', () => {
  let component: OctopusDeployComponent;
  let fixture: ComponentFixture<OctopusDeployComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OctopusDeployComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OctopusDeployComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
