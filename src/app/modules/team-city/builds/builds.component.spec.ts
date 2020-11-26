import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildRequestsComponent } from './build-requests.component';

describe('BuildRequestsComponent', () => {
  let component: BuildRequestsComponent;
  let fixture: ComponentFixture<BuildRequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuildRequestsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuildRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
