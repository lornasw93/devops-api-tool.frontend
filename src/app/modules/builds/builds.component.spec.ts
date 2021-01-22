import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildsComponent } from './builds.component';

describe('BuildRequestsComponent', () => {
  let component: BuildsComponent;
  let fixture: ComponentFixture<BuildsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BuildsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuildsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
