import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamCityComponent } from './teamcity.component';

describe('TeamCityComponent', () => {
  let component: TeamCityComponent;
  let fixture: ComponentFixture<TeamCityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TeamCityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamcityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
